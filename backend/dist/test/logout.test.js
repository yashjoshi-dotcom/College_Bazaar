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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Disconnect from the database after all tests are completed
afterAll(() => mongoose_1.default.disconnect());
// Delete all users from the database before running the tests
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield userSchema_1.default.deleteMany({});
}));
// Test for logging out without being authenticated
test('Log out without being authenticated', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, supertest_1.default)(app_1.default).get('/logout').expect(400);
    expect(res.text).toBe('Unauthorised:_NO_token_provided');
}));
// Test for successfully logging out
test('Log out successfully', () => __awaiter(void 0, void 0, void 0, function* () {
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
    // Finally, log out using the authentication token
    const res = yield (0, supertest_1.default)(app_1.default)
        .get('/logout')
        .set('Cookie', `jwtoken=${token}`)
        .expect(302);
    expect(res.headers.location).toBe('/home');
}));
// Test for logging out with an invalid token
test('Log out with an invalid token', () => __awaiter(void 0, void 0, void 0, function* () {
    // Generate an invalid token
    const invalidToken = jsonwebtoken_1.default.sign({ _id: 'invalidId' }, process.env.JWT_KEY);
    const res = yield (0, supertest_1.default)(app_1.default)
        .get('/logout')
        .set('Cookie', `jwtoken=${invalidToken}`)
        .expect(400);
    expect(res.text).toBe('Unauthorised:_NO_token_provided');
}));
