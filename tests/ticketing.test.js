const request = require('supertest');
const jwt = require('jsonwebtoken');

const { createApp } = require('../app');
const appDataSource = require('../models/dataSource');
const ticketingFixture = require('./fixtures/ticketings-fixture');

const mockToken = jwt.sign({ userId: 1 }, process.env.JWT_SECRET);

describe('ticketing', () => {
  let app;

  const getAllSeats = {
    result: [
      {
        timeTableId: 1,
        seatStatus: [
          {
            status: '통로',
            seatStatusId: 1,
            timeTableSeatId: 1,
          },
        ],
      },
    ],
  };

  beforeAll(async () => {
    app = createApp();
    await appDataSource.initialize();
    await appDataSource.query(`SET FOREIGN_KEY_CHECKS=0`);

    await ticketingFixture.createTimeTableTheaterSeats();
    await ticketingFixture.createSeatStatus();
    await ticketingFixture.createUser();
    await ticketingFixture.createTheaterSeats();
  });

  afterAll(async () => {
    await appDataSource.query(`SET FOREIGN_KEY_CHECKS=0`);
    await appDataSource.query(`TRUNCATE ticketings`);
    await appDataSource.query(`TRUNCATE time_tables_theater_seats`);
    await appDataSource.query(`TRUNCATE theater_seat_status`);
    await appDataSource.query(`TRUNCATE theater_seats`);
    await appDataSource.query(`TRUNCATE users`);
    await appDataSource.query(`SET FOREIGN_KEY_CHECKS=1`);
    await appDataSource.destroy();
  });

  test('SUCCESS: getSeatsByTimeTableId', async () => {
    const response = await request(app).get('/ticketings/1');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(getAllSeats);
  });

  test('FAILURE: Cannot Get SeatsByTimeTableId', async () => {
    const response = await request(app).get('/ticketings/notfoundpage');
    expect(response.statusCode).toEqual(404);
    expect(response.body).toEqual({ message: 'TIMETABLE NOT FOUND' });
  });

  test('SUCCESS: reserveTicket', async () => {
    await ticketingFixture.updateSeatStatusToAvailable();
    await ticketingFixture.reserveTicket();

    const response = await request(app)
      .post('/ticketings/seats/reservation')
      .set('Authorization', mockToken)
      .send({ userId: 1, timeTableSeatId: [1] });

    expect(response.statusCode).toEqual(201);
    expect(response.text).toEqual('{"message":"TICKET RESERVED SUCCESSFULLY"}');
  });

  test('Failure: Not Selected TimeTableSeatId', async () => {
    await ticketingFixture.updateSeatStatusToUnavailable();
    await ticketingFixture.reserveTicket();

    const response = await request(app)
      .post('/ticketings/seats/reservation')
      .set('Authorization', mockToken)
      .send({ userId: 1, timeTableSeatId: undefined });

    expect(response.statusCode).toEqual(500);
  });

  test('SUCCESS: cancelTicket', async () => {
    await ticketingFixture.updateSeatStatusToUnavailable();
    await ticketingFixture.reserveTicket();

    const response = await request(app)
      .patch('/ticketings/seats/cancelation')
      .set('Authorization', mockToken)
      .send({ userId: 1, timeTableSeatId: [1] });

    expect(response.statusCode).toEqual(200);
    expect(response.text).toEqual('{"message":"TICKET CANCEL SUCCESSFULLY"}');
  });
});
