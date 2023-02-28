const appDataSource = require('../../models/dataSource');

const seatStatus = Object.freeze({
  aisle: 1,
  available: 2,
  unavailable: 3,
});

const socialTypes = Object.freeze({
  KAKAO: 1,
  NAVER: 2,
  GOOGLE: 3,
});

const createTimeTableTheaterSeats = async () => {
  return appDataSource.query(
    `
    INSERT INTO time_tables_theater_seats (
      time_table_id, 
      theater_seat_id, 
      theater_seat_status_id
    ) VALUES (?, ?, ?)
    `,
    [1, 1, seatStatus.aisle]
  );
};

const createSeatStatus = async () => {
  return appDataSource.query(
    `
    INSERT INTO theater_seat_status (
      name
    ) VALUES ('통로'), ('예매 가능'), ('예매 불가능');
    `
  );
};

const createTheaterSeats = async () => {
  const isDisabledSeat = Object.freeze({
    disabledSeat: 1,
    NotDisabledSeat: 0,
  });
  return appDataSource.query(
    `
    INSERT INTO theater_seats (
      theater_id, seat_number, seat_row, disabled_seat
    ) VALUES (?, ?, ?, ?);
    `,
    [1, '1', 'A', isDisabledSeat.disabledSeat]
  );
};

const createUser = async () => {
  return appDataSource.query(
    `
    INSERT INTO users (
      social_id,
      social_type_id, 
      profile_image, 
      profile_nickname, 
      account_email
    ) 
    VALUES (
      ?,
      ?,
      ?,
      ?,
      ?
    )
    `,
    [12345, socialTypes.KAKAO, 'image', 'test', 'test1@email.com']
  );
};

const updateSeatStatusToUnavailable = async () => {
  return appDataSource.query(
    `
    UPDATE time_tables_theater_seats
    SET theater_seat_status_id=?
    WHERE theater_seat_id=?;
    `,
    [seatStatus.unavailable, 1]
  );
};

const updateSeatStatusToAvailable = async () => {
  return appDataSource.query(
    `
    UPDATE time_tables_theater_seats
    SET theater_seat_status_id=?
    WHERE theater_seat_id=?;
    `,
    [seatStatus.available, 1]
  );
};

const reserveTicket = async () => {
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
    [1, 1]
  );
};

module.exports = {
  createSeatStatus,
  createTimeTableTheaterSeats,
  createUser,
  updateSeatStatusToUnavailable,
  updateSeatStatusToAvailable,
  reserveTicket,
  createTheaterSeats,
};
