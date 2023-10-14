"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing required libraries
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
// Creating an express app
const app = (0, express_1.default)();
// Using middleware for parsing and cors
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Creating an http server
const server = http_1.default.createServer(app);
// Initialising Socket.io
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});
// Using Socket.io for chat purposes
io.on('connection', (socket) => {
    // Joining a room
    socket.on('join_room', (data) => {
        socket.join(data);
    });
    // Sending a message to a room
    socket.on('send_message', (data) => {
        socket.to(data.room).emit('receive_message', data);
    });
    // Disconnecting from a room
    socket.on('disconnect', () => { });
});
