import io from "socket.io-client";

const SERVER_URL = process.env.SERVER_URL || "localhost:5000/";
// const SERVER_URL = process.env.SERVER_URL || "https://whiteboard-pseudo-project-401.herokuapp.com/";

export const socket = io(SERVER_URL, {
  transports: ["websocket"],
  upgrade: false,
});
