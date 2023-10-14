import request from 'supertest';
import app from '../app';
import User from '../src/models/userSchema';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

// Disconnect from the database after all tests are completed
afterAll(() => mongoose.disconnect());

// Delete all users from the database before running the tests
beforeAll(async () => {
  await User.deleteMany({});
});

// Test for accessing profile data without being authenticated
test('Access profile data without being authenticated', async () => {
  const res = await request(app).get('/profilec').expect(400);

  expect(res.text).toBe('Unauthorised:_NO_token_provided');
});

// Test for successfully accessing profile data
test('Access profile data successfully', async () => {
  // First, register a new user
  await request(app)
    .post('/register')
    .send({
      name: 'Test',
      email_id: 'Test@dtu.ac.in',
      password: 'Test@dtu.ac.in',
    })
    .expect(201);

  // Then, sign in with the registered user's credentials to get the authentication token
  const signInRes = await request(app)
    .post('/signin')
    .send({
      email_id: 'Test@dtu.ac.in',
      password: 'Test@dtu.ac.in',
    })
    .expect(200);

  const token = signInRes.headers['set-cookie'][0].split('=')[1].split(';')[0];

  // Finally, access the profile data using the authentication token
  const res = await request(app)
    .get('/profilec')
    .set('Cookie', `jwtoken=${token}`)
    .expect(200);

  expect(res.body.email_id).toBe('Test@dtu.ac.in');
});

// Test for accessing profile data with an invalid token
test('Access profile data with an invalid token', async () => {
  // Generate an invalid token
  const invalidToken = jwt.sign({ _id: 'invalidId' }, process.env.JWT_KEY!);

  const res = await request(app)
    .get('/profilec')
    .set('Cookie', `jwtoken=${invalidToken}`)
    .expect(400);

  expect(res.text).toBe('Unauthorised:_NO_token_provided');
});
