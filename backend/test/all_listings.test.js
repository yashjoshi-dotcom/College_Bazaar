const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

afterAll(() => mongoose.disconnect());

test('Get the whole database', async () => {
  await request(app).get('/db').expect(200);
});
