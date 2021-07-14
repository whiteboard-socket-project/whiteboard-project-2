import { io } from "socket.io-client";
import React, { Component } from "react";

// const socket = io("http://localhost:5000/" , {transports: ['websocket'], upgrade: false});

class App extends Component {
  componentDidMount() {
    // socket.on("msg", () => {
    //   console.log("msg from client");
    // });
    const socket = io("http://localhost:5000/" , {transports: ['websocket'], upgrade: false});

  }
  render() {
    return <div>this is the client side </div>;
  }
}

export default App;
