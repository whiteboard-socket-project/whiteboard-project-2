import React, { Component } from "react";
import { socket } from "../Socket/Socket";
import Container from "../wthiteboard/Container/ContainerAdmin";
class Admin extends Component {
  constructor(props) {
    super(props);

    console.log("PROPS from admin", socket);
  }

  // componentDidMount() {
  //   socket.on("sendDrawing", (payload) => {
  //     console.log(payload);
  //   });
  // }

  drawing(e) {
    e.preventDefault();

    socket.emit("sendDrawing", { msg: e.target.id.value });
  }

  render() {
    return (
      <>
        {/* <div>working</div>
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
        ></canvas> */}

        <Container />
      </>
    );
  }
}

export default Admin;
