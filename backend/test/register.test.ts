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

// Test for registering a new user with missing name field
test('Register a new User with missing name', async () => {
  const res = await request(app)
    .post('/register')
    .send({
      name: '',
      email_id: 'Test@dtu.ac.in',
      password: 'SomeRandomPassword',
    })
    .expect(409);

  expect(res.body.error).toBe(
    'Bad Request: Please enter all the required data.'
  );
});

// Test for registering a new user with missing email_id field
test('Register a new User with missing email_id', async () => {
  const res = await request(app)
    .post('/register')
    .send({
      name: 'Test',
      email_id: '',
      password: 'SomeRandomPassword',
    })
    .expect(409);

  expect(res.body.error).toBe(
    'Bad Request: Please enter all the required data.'
  );
});

// Test for registering a new user with missing password field
test('Register a new User with missing password', async () => {
  const res = await request(app)
    .post('/register')
    .send({
      name: 'Test',
      email_id: 'Test@dtu.ac.in',
      password: '',
    })
    .expect(409);

  expect(res.body.error).toBe(
    'Bad Request: Please enter all the required data.'
  );
});

// Test for registering a new user with invalid email domain
test('Register a new User with invalid email domain', async () => {
  const res = await request(app)
    .post('/register')
    .send({
      name: 'Test',
      email_id: 'Test@someOtherThing.com',
      password: 'SomeRandomPassword',
    })
    .expect(400);

  expect(res.body.error).toBe(
    "Bad Request: Only DTU institutional email ID's allowed."
  );
});

// Test for successfully registering a new user
test('Register a new User successfully', async () => {
  const res = await request(app)
    .post('/register')
    .send({
      name: 'Test',
      email_id: 'Test@dtu.ac.in',
      password: 'Test@dtu.ac.in',
    })
    .expect(201);

  expect(res.body.message).toBe('Registered sucessfully');
});

// Test for re-registering an already existing user
test('Re-registering already existing User', async () => {
  const res = await request(app)
    .post('/register')
    .send({
      name: 'Test',
      email_id: 'Test@dtu.ac.in',
      password: 'Test@dtu.ac.in',
    })
    .expect(403);

  expect(res.body.error).toBe(
    '{Forbidden to create multiple accounts} Email already exists'
  );
});

// Test for server error response
test('Server error response', async () => {
  jest.spyOn(User, 'findOne').mockImplementationOnce(() => {
    throw new Error();
  });

  const res = await request(app)
    .post('/register')
    .send({
      name: 'Test2',
      email_id: 'Test2@dtu.ac.in',
      password: 'Test2@dtu.ac.in',
    })
    .expect(500);

  expect(res.body.error).toBe('We are experiencing some server problems!!');
});

// Test for registering a new user with invalid email format
test('Register a new User with invalid email format', async () => {
  const res = await request(app)
    .post('/register')
    .send({
      name: 'Test',
      email_id: 'Testdtu.ac.in',
      password: 'SomeRandomPassword',
    })
    .expect(400);

  expect(res.body.error).toBe(
    "Bad Request: Only DTU institutional email ID's allowed."
  );
});
