const appDataSource = require('./dataSource');

const orderStatus = Object.freeze({
  standBy: 1,
  completed: 2,
  canceled: 3,
});

const createOrder = async (paymentData, userId, orderNumber) => {
  const { aid, tid, payment_method_type: paymentType, quantity } = paymentData;
  const {
    total: totalAmount,
    tax_free: taxFree,
    vat,
    point,
    discount,
  } = paymentData.amount;

  const queryRunner = appDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const [ticketInfo] = await queryRunner.query(
      `
      SELECT
        user_id,
        JSON_ARRAYAGG(time_tables_theater_seat_id) AS seatList
      FROM ticketings
      WHERE user_id=?
      GROUP BY user_id
      `,
      [userId]
    );

    await queryRunner.query(
      `
      INSERT INTO orders (
        user_id,
        tid,
        order_number,
        quantity,
        total_amount,
        tax_free_amount,
        order_status_id
      )
      VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      )
      `,
      [
        userId,
        tid,
        orderNumber,
        quantity,
        totalAmount,
        taxFree,
        orderStatus.completed,
      ]
    );

    const [orderId] = await queryRunner.query(
      `SELECT LAST_INSERT_ID() as lastOrderId FROM orders`
    );

    const rawOrderItemsQuery = `
      INSERT INTO order_items (
        order_id,
        time_table_theater_seat_id
      )
      VALUES ?
    `;

    let orderItemList = [];
    for (let i = 0; i < ticketInfo.seatList.length; i++) {
      orderItemList.push([Number(orderId.lastOrderId), ticketInfo.seatList[i]]);
    }

    await queryRunner.query(rawOrderItemsQuery, [orderItemList]);

    await queryRunner.query(
      `
      INSERT INTO payment_result (
        order_id,
        aid,
        tid,
        quantity,
        payment_method_type,
        payment_amount,
        tax_free,
        vat,
        point,
        discount
      )
      VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      )
      `,
      [
        Number(orderId.lastOrderId),
        aid,
        tid,
        quantity,
        paymentType,
        totalAmount,
        taxFree,
        vat,
        point,
        discount,
      ]
    );

    await queryRunner.query(
      `
      DELETE
      FROM ticketings
      WHERE user_id=?
      `,
      [userId]
    );

    await queryRunner.commitTransaction();
    await queryRunner.release();
  } catch (err) {
    await queryRunner.rollbackTransaction();
    await queryRunner.release();

    throw new Error('FAILED TO CREATE ORDER');
  }
};

const getOrder = async (userId, orderNumber) => {
  const rawQuery = `
    SELECT 
        oi.id as orderItemId,
        oi.order_id as orderId,
        o.user_id as userId,
        m.name as movieTitle,
        m.thumbnail_image_url as thumbnailUrl,
        t.name as theater,
        fr.rating as filmRating,
        DATE_FORMAT(tt.table_date, '%Y-%m-%d') as movieDate,
        DATE_FORMAT(tt.table_time, '%H:%i') as movieTime,
        CONCAT(ts.seat_row, ts.seat_number) as theaterSeat,
        (o.total_amount - ROUND(o.total_amount*cd.discount_rate) - ROUND(o.total_amount*dd.discount_rate)) as paymentAmount,
        ROUND(o.total_amount*cd.discount_rate) as couponDiscountAmount,
        ROUND(o.total_amount*dd.discount_rate) as datetimeDiscountAmount
    FROM order_items oi
    JOIN orders o ON o.id = oi.order_id
    JOIN time_tables_theater_seats ttts ON ttts.id = oi.time_table_theater_seat_id
    JOIN time_tables tt ON tt.id = ttts.time_table_id
    JOIN theater_seats ts ON ts.id = ttts.theater_seat_id
    JOIN theaters t ON t.id = ts.theater_id
    JOIN movies m ON m.id = tt.movie_id
    JOIN coupon_discounts cd ON cd.id = o.coupon_discount_id
    JOIN datetime_discounts dd ON dd.id = tt.datetime_discount_id
    JOIN film_ratings fr ON fr.id = m.film_rating_id
    WHERE o.user_id = ? AND o.order_number = ?;
    `;

  return appDataSource.query(rawQuery, [userId, orderNumber]);
};

module.exports = {
  createOrder,
  getOrder,
};
