const { raw } = require('mysql2');
const appDataSource = require('./dataSource');

const orderStatus = Object.freeze({
  standBy: 1,
  completed: 2,
  canceled: 3,
});

const createOrder = async (paymentData, userId) => {
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
        ?
      )
      `,
      [userId, tid, quantity, totalAmount, taxFree, orderStatus.completed]
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

module.exports = {
  createOrder,
};
