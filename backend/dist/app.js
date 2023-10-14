"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing required libraries
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// Initiating Connection to the MongoDB
require("./src/db/conn");
// Initialsing and using Socket.io for chat functionality
require("./src/chat/socket_io");
// Importing all routes
const all_listings_1 = __importDefault(require("./src/routes/all_listings"));
const register_1 = __importDefault(require("./src/routes/register"));
const add_item_1 = __importDefault(require("./src/routes/add_item"));
const profile_1 = __importDefault(require("./src/routes/profile"));
const delete_user_1 = __importDefault(require("./src/routes/delete_user"));
const signin_1 = __importDefault(require("./src/routes/signin"));
const logout_1 = __importDefault(require("./src/routes/logout"));
const base_endpoint_1 = __importDefault(require("./src/routes/base_endpoint"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
// Setting Routes
app.use('/db', all_listings_1.default);
app.use('/add_data', add_item_1.default);
app.use('/register', register_1.default);
app.use('/signin', signin_1.default);
app.use('/del', delete_user_1.default);
app.use('/profilec', profile_1.default);
app.use('/logout', logout_1.default);
app.use('/', base_endpoint_1.default);
exports.default = app;
