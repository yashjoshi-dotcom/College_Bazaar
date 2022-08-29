const express = require("express");
require("dotenv").config({ path: "config.env" });
const app = express();
const http = require("http");
const port = process.env.PORT || 5000;
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());
const cookieParser = require('cookie-parser')
app.use(cookieParser());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User With ID: ${socket.id} joined room : ${data}`);
  });
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("Server Running");
});

const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
require("./src/db/conn");

const ranks = require("./src/models/userSchema");
app.use(express.json());
app.use(require("./src/router/auth"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
