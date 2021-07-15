import { io } from "socket.io-client";
import React, { Component } from "react";

// const socket = io("http://localhost:5000/" , {transports: ['websocket'], upgrade: false});
let socket;
class App extends Component {
  componentDidMount() {
    // socket.on("msg", () => {
    //   console.log("msg from client");
    // });
    socket = io("http://localhost:5000/", {
      transports: ["websocket"],
      upgrade: false,
    });

    socket.on("sendDrawing", (payload) => {
      console.log(payload);
    });
  }

  drawing(e) {
    e.preventDefault();
    console.log(e.target.id.value);
    socket.emit("sendDrawing", { msg: e.target.id.value });
  }
  render() {
    return (
      <>
        <div>working</div>
        <form onSubmit={this.drawing}>
          <input id="id" type="text" />
          <input type="submit" />
        </form>

        <canvas
          style={{
            width: "50rem",
            height: "20rem",
            border: "1px solid black",
          }}
        ></canvas>
      </>
    );
  }
}

export default App;
