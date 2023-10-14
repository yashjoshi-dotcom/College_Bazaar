import request from 'supertest';
import app from '../app';
import User from '../src/models/userSchema';
import mongoose from 'mongoose';

jest.setTimeout(30000);

// Disconnect from the database after all tests are completed
afterAll(() => mongoose.disconnect());

// Delete all users from the database before running the tests
beforeAll(async () => {
  await User.deleteMany({});
});

// Test for adding a new listing without being authenticated
test('Add a new listing without being authenticated', async () => {
  const res = await request(app)
    .patch('/add_data')
    .send({
      item_name: 'Test Item',
      item_price: 100,
      item_age: 1,
      item_condition: 5,
      item_image: 'https://dummyimage.com/600x400/000/fff',
      item_tag: 'Others',
      item_description: 'Test description',
    })
    .expect(400);

  expect(res.text).toBe('Unauthorised:_NO_token_provided');
});

// Test for adding a new listing with missing fields
test('Add a new listing with missing fields', async () => {
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

  // Finally, try to add a new listing with missing fields using the authentication token
  const res = await request(app)
    .patch('/add_data')
    .set('Cookie', `jwtoken=${token}`)
    .send({
      item_name: '',
      item_price: '',
      item_age: '',
      item_condition: '',
      item_image: '',
      item_tag: '',
      item_description: '',
    })
    .expect(400);

  expect(res.body.error).toBe(
    'Bad Request: Please enter all the required data.'
  );
});

// Test for adding a new listing with invalid data
test('Add a new listing with invalid data', async () => {
  // Sign in with the registered user's credentials to get the authentication token
  const signInRes = await request(app)
    .post('/signin')
    .send({
      email_id: 'Test@dtu.ac.in',
      password: 'Test@dtu.ac.in',
    })
    .expect(200);

  const token = signInRes.headers['set-cookie'][0].split('=')[1].split(';')[0];

  // Try to add a new listing with invalid item_tag using the authentication token
  const res = await request(app)
    .patch('/add_data')
    .set('Cookie', `jwtoken=${token}`)
    .send({
      item_name: 'Test Item',
      item_price: 100,
      item_age: 1,
      item_condition: 5,
      item_image: 'https://dummyimage.com/600x400/000/fff',
      item_tag: 'invalid tag',
      item_description: 'Test description',
    })
    .expect(400);

  expect(res.body.error).toBe('Bad Request: Invalid item tag.');
});
