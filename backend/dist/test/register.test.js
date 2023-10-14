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
// Test for registering a new user with missing name field
test('Register a new User with missing name', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, supertest_1.default)(app_1.default)
        .post('/register')
        .send({
        name: '',
        email_id: 'Test@dtu.ac.in',
        password: 'SomeRandomPassword',
    })
        .expect(409);
    expect(res.body.error).toBe('Bad Request: Please enter all the required data.');
}));
// Test for registering a new user with missing email_id field
test('Register a new User with missing email_id', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, supertest_1.default)(app_1.default)
        .post('/register')
        .send({
        name: 'Test',
        email_id: '',
        password: 'SomeRandomPassword',
    })
        .expect(409);
    expect(res.body.error).toBe('Bad Request: Please enter all the required data.');
}));
// Test for registering a new user with missing password field
test('Register a new User with missing password', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, supertest_1.default)(app_1.default)
        .post('/register')
        .send({
        name: 'Test',
        email_id: 'Test@dtu.ac.in',
        password: '',
    })
        .expect(409);
    expect(res.body.error).toBe('Bad Request: Please enter all the required data.');
}));
// Test for registering a new user with invalid email domain
test('Register a new User with invalid email domain', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, supertest_1.default)(app_1.default)
        .post('/register')
        .send({
        name: 'Test',
        email_id: 'Test@someOtherThing.com',
        password: 'SomeRandomPassword',
    })
        .expect(400);
    expect(res.body.error).toBe("Bad Request: Only DTU institutional email ID's allowed.");
}));
// Test for successfully registering a new user
test('Register a new User successfully', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, supertest_1.default)(app_1.default)
        .post('/register')
        .send({
        name: 'Test',
        email_id: 'Test@dtu.ac.in',
        password: 'Test@dtu.ac.in',
    })
        .expect(201);
    expect(res.body.message).toBe('Registered sucessfully');
}));
// Test for re-registering an already existing user
test('Re-registering already existing User', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, supertest_1.default)(app_1.default)
        .post('/register')
        .send({
        name: 'Test',
        email_id: 'Test@dtu.ac.in',
        password: 'Test@dtu.ac.in',
    })
        .expect(403);
    expect(res.body.error).toBe('{Forbidden to create multiple accounts} Email already exists');
}));
// Test for server error response
test('Server error response', () => __awaiter(void 0, void 0, void 0, function* () {
    jest.spyOn(userSchema_1.default, 'findOne').mockImplementationOnce(() => {
        throw new Error();
    });
    const res = yield (0, supertest_1.default)(app_1.default)
        .post('/register')
        .send({
        name: 'Test2',
        email_id: 'Test2@dtu.ac.in',
        password: 'Test2@dtu.ac.in',
    })
        .expect(500);
    expect(res.body.error).toBe('We are experiencing some server problems!!');
}));
// Test for registering a new user with invalid email format
test('Register a new User with invalid email format', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, supertest_1.default)(app_1.default)
        .post('/register')
        .send({
        name: 'Test',
        email_id: 'Testdtu.ac.in',
        password: 'SomeRandomPassword',
    })
        .expect(400);
    expect(res.body.error).toBe("Bad Request: Only DTU institutional email ID's allowed.");
}));
