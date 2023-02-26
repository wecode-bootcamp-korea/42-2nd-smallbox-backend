const request = require('supertest');
const { createApp } = require('../app');

describe('health check', () => {
  beforeAll(async () => {
    app = createApp();
  });

  test('SUCCESS : health check', async () => {
    const response = await request(app).get('/ping');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ message: 'pong' });
  });
});
