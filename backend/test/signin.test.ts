import request from 'supertest';
import app from '../app';
import User from '../src/models/userSchema';
import mongoose from 'mongoose';

// Disconnect from the database after all tests are completed
afterAll(() => mongoose.disconnect());

// Delete all users from the database before running the tests
beforeAll(async () => {
  await User.deleteMany({});
});

// Test for signing in with missing email_id field
test('Sign in with missing email_id', async () => {
  const res = await request(app)
    .post('/signin')
    .send({
      email_id: '',
      password: 'SomeRandomPassword',
    })
    .expect(400);

  expect(res.body.error).toBe('incomplete Data');
});

// Test for signing in with missing password field
test('Sign in with missing password', async () => {
  const res = await request(app)
    .post('/signin')
    .send({
      email_id: 'Test@dtu.ac.in',
      password: '',
    })
    .expect(400);

  expect(res.body.error).toBe('incomplete Data');
});

// Test for signing in with invalid email_id
test('Sign in with invalid email_id', async () => {
  const res = await request(app)
    .post('/signin')
    .send({
      email_id: 'Test@dtu.ac.in',
      password: 'SomeRandomPassword',
    })
    .expect(400);

  expect(res.body.message).toBe(
    'Invalid Email ID. Pls register before signing in'
  );
});

// Test for successfully signing in
test('Sign in successfully', async () => {
  // First, register a new user
  await request(app)
    .post('/register')
    .send({
      name: 'Test',
      email_id: 'Test@dtu.ac.in',
      password: 'Test@dtu.ac.in',
    })
    .expect(201);

  // Then, sign in with the registered user's credentials
  const res = await request(app)
    .post('/signin')
    .send({
      email_id: 'Test@dtu.ac.in',
      password: 'Test@dtu.ac.in',
    })
    .expect(200);

  expect(res.body.message).toBe('Login Successful');
});

// Test for signing in with invalid password
test('Sign in with invalid password', async () => {
  const res = await request(app)
    .post('/signin')
    .send({
      email_id: 'Test@dtu.ac.in',
      password: 'InvalidPassword',
    })
    .expect(403);

  expect(res.body.message).toBe('Access Denied : Invalid Credentials');
});
