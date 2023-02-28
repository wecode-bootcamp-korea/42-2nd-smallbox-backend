const appDataSource = require('./dataSource');

const getMovies = async () => {
  const rawQuery = `
    SELECT DISTINCT
      m.id as id,
      m.name as movieTitle,
      m.thumbnail_image_url as movieThumbnail,
      DATE_FORMAT(m.opening_date, '%Y-%m-%d') as releaseDate,
      fr.rating as rating
    FROM movies m
    JOIN film_ratings fr ON m.film_rating_id = fr.id
    ORDER BY m.name ASC;
    `;
  return appDataSource.query(rawQuery);
};

const getTimetables = async () => {
  const seatStatus = Object.freeze({
    AISLE: 1,
    AVAILABLE: 2,
    RESERVED: 3,
  });

  const rawQuery = `
    SELECT
      m.id as movieId,
      tt.id as timetableId,
      DATE_FORMAT(tt.table_date, '%Y-%m-%d') as date,
      tt.table_time as time,
      SUM(CASE WHEN tss.name  = ${seatStatus.AVAILABLE} THEN 1 ELSE 0 END) as availableSeats,
      COUNT(ts.id) as totalSeats
    FROM time_tables_theater_seats ttts
    JOIN theater_seat_status tss ON tss.id = ttts.theater_seat_status_id
    JOIN theater_seats ts ON ts.id = ttts.theater_seat_id
    JOIN theaters t ON t.id = ts.theater_id
    JOIN time_tables tt ON tt.id = ttts.time_table_id
    JOIN movies m ON m.id = tt.movie_id
    WHERE tss.id != ${seatStatus.AISLE}
    GROUP BY tt.id, m.id, m.name;
    `;

  return appDataSource.query(rawQuery);
};

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
  getMovies,
  getTimetables,
  getSeatsByTimeTableId,
  reserveTicket,
  deleteTicket,
};
