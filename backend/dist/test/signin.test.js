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
// Disconnect from the database after all tests are completed
afterAll(() => mongoose_1.default.disconnect());
// Delete all users from the database before running the tests
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield userSchema_1.default.deleteMany({});
}));
// Test for signing in with missing email_id field
test('Sign in with missing email_id', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, supertest_1.default)(app_1.default)
        .post('/signin')
        .send({
        email_id: '',
        password: 'SomeRandomPassword',
    })
        .expect(400);
    expect(res.body.error).toBe('incomplete Data');
}));
// Test for signing in with missing password field
test('Sign in with missing password', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, supertest_1.default)(app_1.default)
        .post('/signin')
        .send({
        email_id: 'Test@dtu.ac.in',
        password: '',
    })
        .expect(400);
    expect(res.body.error).toBe('incomplete Data');
}));
// Test for signing in with invalid email_id
test('Sign in with invalid email_id', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, supertest_1.default)(app_1.default)
        .post('/signin')
        .send({
        email_id: 'Test@dtu.ac.in',
        password: 'SomeRandomPassword',
    })
        .expect(400);
    expect(res.body.message).toBe('Invalid Email ID. Pls register before signing in');
}));
// Test for successfully signing in
test('Sign in successfully', () => __awaiter(void 0, void 0, void 0, function* () {
    // First, register a new user
    yield (0, supertest_1.default)(app_1.default)
        .post('/register')
        .send({
        name: 'Test',
        email_id: 'Test@dtu.ac.in',
        password: 'Test@dtu.ac.in',
    })
        .expect(201);
    // Then, sign in with the registered user's credentials
    const res = yield (0, supertest_1.default)(app_1.default)
        .post('/signin')
        .send({
        email_id: 'Test@dtu.ac.in',
        password: 'Test@dtu.ac.in',
    })
        .expect(200);
    expect(res.body.message).toBe('Login Successful');
}));
// Test for signing in with invalid password
test('Sign in with invalid password', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, supertest_1.default)(app_1.default)
        .post('/signin')
        .send({
        email_id: 'Test@dtu.ac.in',
        password: 'InvalidPassword',
    })
        .expect(403);
    expect(res.body.message).toBe('Access Denied : Invalid Credentials');
}));
