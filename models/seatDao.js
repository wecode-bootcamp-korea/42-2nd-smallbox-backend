const appDataSource = require('./dataSource');

const updateSeatStatus = async (seatId) => {
  const seatStatus = Object.freeze({
    aisle: 1,
    available: 2,
    unavailable: 3,
  });

  return appDataSource.query(
    `
    UPDATE time_tables_theater_seats
    SET theater_seat_status_id=?
    WHERE theater_seat_id=?;
    `,
    [seatStatus.unavailable, seatId]
  );
};

const cancelReservedSeat = async (seatId) => {
  const seatStatus = Object.freeze({
    aisle: 1,
    available: 2,
    unavailable: 3,
  });

  return appDataSource.query(
    `
    UPDATE time_tables_theater_seats
    SET theater_seat_status_id=?
    WHERE theater_seat_id=?;
    `,
    [seatStatus.available, seatId]
  );
};

module.exports = {
  updateSeatStatus,
  cancelReservedSeat,
};
