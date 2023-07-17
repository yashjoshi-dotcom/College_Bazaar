const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

// Disconnecting Mongoose Connection after the tests have completed.
afterAll(() => mongoose.disconnect());

// Checking status Code for now of the response.
test('Get the whole database', async () => {
  await request(app).get('/db').expect(200);
});
