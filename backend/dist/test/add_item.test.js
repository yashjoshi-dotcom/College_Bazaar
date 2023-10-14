"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const userSchema_1 = __importDefault(require("../src/models/userSchema"));
const mongoose_1 = __importDefault(require("mongoose"));
jest.setTimeout(30000);
// Disconnect from the database after all tests are completed
afterAll(() => mongoose_1.default.disconnect());
// Delete all users from the database before running the tests
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield userSchema_1.default.deleteMany({});
}));
// Test for adding a new listing without being authenticated
test('Add a new listing without being authenticated', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, supertest_1.default)(app_1.default)
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
}));
// Test for adding a new listing with missing fields
test('Add a new listing with missing fields', () => __awaiter(void 0, void 0, void 0, function* () {
    // First, register a new user
    yield (0, supertest_1.default)(app_1.default)
        .post('/register')
        .send({
        name: 'Test',
        email_id: 'Test@dtu.ac.in',
        password: 'Test@dtu.ac.in',
    })
        .expect(201);
    // Then, sign in with the registered user's credentials to get the authentication token
    const signInRes = yield (0, supertest_1.default)(app_1.default)
        .post('/signin')
        .send({
        email_id: 'Test@dtu.ac.in',
        password: 'Test@dtu.ac.in',
    })
        .expect(200);
    const token = signInRes.headers['set-cookie'][0].split('=')[1].split(';')[0];
    // Finally, try to add a new listing with missing fields using the authentication token
    const res = yield (0, supertest_1.default)(app_1.default)
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
    expect(res.body.error).toBe('Bad Request: Please enter all the required data.');
}));
// Test for adding a new listing with invalid data
test('Add a new listing with invalid data', () => __awaiter(void 0, void 0, void 0, function* () {
    // Sign in with the registered user's credentials to get the authentication token
    const signInRes = yield (0, supertest_1.default)(app_1.default)
        .post('/signin')
        .send({
        email_id: 'Test@dtu.ac.in',
        password: 'Test@dtu.ac.in',
    })
        .expect(200);
    const token = signInRes.headers['set-cookie'][0].split('=')[1].split(';')[0];
    // Try to add a new listing with invalid item_tag using the authentication token
    const res = yield (0, supertest_1.default)(app_1.default)
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
}));
