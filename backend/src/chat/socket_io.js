// Importing required libraries
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const server = require('http').createServer(app);

// Initialising Socket.io
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Using Socket.io for chat purposes
io.on('connection', (socket) => {
  socket.on('join_room', (data) => {
    socket.join(data);
  });
  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data);
  });
  socket.on('disconnect', () => {});
});
