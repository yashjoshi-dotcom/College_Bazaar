const express = require("express");
require("dotenv").config();
const app = express();
const http = require("http");
const port = process.env.PORT || 5000;
const cors = require("cors");
const server = require("http").createServer(app);

app.use(cors());
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  //console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    //console.log(`User With ID: ${socket.id} joined room : ${data}`);
  });
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
  socket.on("disconnect", () => {
    //console.log("User Disconnected", socket.id);
  });
});

// server.listen(3001, () => {
//   console.log("Server Running");
// });

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
//
if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
}
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
