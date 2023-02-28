const request = require('supertest');

const { createApp } = require('../app');
const appDataSource = require('../models/dataSource');
const axios = require('axios');

jest.mock('axios');

describe('kakao-login', () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await appDataSource.initialize();
    await appDataSource.query(
      `
        INSERT INTO social_types
        (id, type) VALUES (1, "카카오")
        `
    );
    await appDataSource.query(
      `
      INSERT INTO users
      (social_id, social_type_id, profile_image, profile_nickname, account_email) 
      VALUES (12345, 1, "image", "test", "test1@email.com")
      `
    );
  });

  afterAll(async () => {
    await appDataSource.query(`SET FOREIGN_KEY_CHECKS=0`);
    await appDataSource.query(`TRUNCATE social_types`);
    await appDataSource.query(`TRUNCATE users`);
    await appDataSource.query(`SET FOREIGN_KEY_CHECKS=1`);
    await appDataSource.destroy();
  });

  test('SUCCESS: Kakao Login for new user', async () => {
    axios.get = jest.fn().mockReturnValue({
      data: {
        id: 99999999,
        properties: {
          profile_image: 'test_profile_image_url',
          nickname: 'test_nickname',
        },
        kakao_account: {
          email: 'testemail@email.com',
        },
      },
    });

    const response = await request(app)
      .post('/users/login')
      .set('Authorization', 'access_token');

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('accessToken');
  });

  test('SUCCESS: Kakao Login for existed user', async () => {
    axios.get = jest.fn().mockReturnValue({
      data: {
        id: 12345,
        properties: {
          profile_image: 'test_profile_image_url',
          nickname: 'test_nickname',
        },
        kakao_account: {
          email: 'testemail@email.com',
        },
      },
    });

    const response = await request(app)
      .post('/users/login')
      .set('Authorization', 'access_token');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty('accessToken');
  });

  test('FAILED: Need AccessToken', async () => {
    const response = await request(app).post('/users/login');
    expect(response.statusCode).toEqual(401);
    expect(response.text).toEqual('{"message":"missingAuthCode"}');
  });
});
