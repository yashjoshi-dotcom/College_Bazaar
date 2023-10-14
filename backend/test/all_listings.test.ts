import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';

// Disconnecting Mongoose Connection after the tests have completed.
afterAll(() => mongoose.disconnect());

// Checking status Code for now of the response.
test('Get the whole database', async () => {
  await request(app).get('/db').expect(200);
});
