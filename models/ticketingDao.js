const appDataSource = require('./dataSource');

const getSeatsByTimeTableId = async (timeTableId) => {
  return appDataSource.query(
    `
    SELECT 
      ttts.time_table_id as timeTableId,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "timeTableSeatId", ttts.id,
          "seatStatusId", ttts.theater_seat_status_id,
          "status", tss.name
      )) as seatStatus 
    FROM time_tables_theater_seats ttts
    INNER JOIN theater_seat_status tss ON tss.id=ttts.theater_seat_status_id
    WHERE ttts.time_table_id=?
    GROUP BY ttts.time_table_id, ttts.id
    ORDER BY ttts.time_table_id, ttts.id ASC;
    `,
    [timeTableId]
  );
};

const reserveTicket = async (userId, timeTableSeatId) => {
  return appDataSource.query(
    `
    INSERT INTO ticketings (
      user_id,
      time_tables_theater_seat_id
    )
    VALUES (
      ?,
      ?
    );
    `,
    [userId, timeTableSeatId]
  );
};

const deleteTicket = async (timeTableSeatId, userId) => {
  return appDataSource.query(
    `
    DELETE
    FROM ticketings
    WHERE time_tables_theater_seat_id=? AND user_id=?;
    `,
    [timeTableSeatId, userId]
  );
};

module.exports = {
  getSeatsByTimeTableId,
  reserveTicket,
  deleteTicket,
};
