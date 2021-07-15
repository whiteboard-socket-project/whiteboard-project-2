const app = require("express")();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

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

  socket.on("canvas-data", (payload) => {
    console.log(payload);
    socket.broadcast.emit("canvas-data", payload);
  });

  socket.on("disconnect", () => {
    console.log(socket.id, "a user disconnected");
  });
});

server.listen(5000, () => {
  console.log("listening on *:5000");
});
