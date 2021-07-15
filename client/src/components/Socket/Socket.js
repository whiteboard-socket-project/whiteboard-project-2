import io from "socket.io-client";

const SERVER_URL = process.env.SERVER_URL || "localhost:5000/";

export const socket = io(SERVER_URL, {
  transports: ["websocket"],
  upgrade: false,
});
