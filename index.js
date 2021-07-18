const app = require("express")();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const mongoose = require("mongoose");
require("dotenv").config();
const userModel = require("./DB/userModel");
const drawModel = require("./DB/drawModel");

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

// io.on("connection", (socket) => {
//   console.log(socket.id, "a user connected");

//   socket.on("sendDrawing", (payload) => {
//     console.log(payload);
//     socket.broadcast.emit("sendDrawing", payload.msg);
//   });

//   socket.on("disconnect", () => {
//     console.log(socket.id, "a user disconnected");
//   });
// });

io.on("connection", (socket) => {
  console.log(socket.id, "a user connected");

  socket.on("save", (payload) => {
    console.log("this is from frontend", payload);

    let user = {
      studentName: payload.studentName,
      studntEmail: payload.studntEmail,
    };
    console.log("user", user);

    let newUser = new userModel(user);
    newUser.save();

    console.log("check if saved", newUser);

    userModel.find({}, (err, data) => {
      console.log("this is from db", data);
      socket.emit("table", data);
    });
  });

  socket.on("canvas-data", (payload) => {
    // console.log(payload);
    socket.broadcast.emit("canvas-data", payload);

    // let newDraw = new drawModel(payload);
    // newDraw.save();
  });

  socket.on("disconnect", () => {
    console.log(socket.id, "a user disconnected");
  });
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })

  .then(() => {
    server.listen(5000, () => {
      console.log("listening on *:5000");
    });
  })

  .catch((error) => {
    console.log("CONNECTION ERROR", error.message);
  });
