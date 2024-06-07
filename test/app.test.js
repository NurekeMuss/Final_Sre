const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return Hello World!', async () => {
    const res = await request(app)
      .get('/')
      .send();
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello World!');
  });
});