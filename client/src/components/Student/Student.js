import React, { Component } from "react";
import { socket } from "../Socket/Socket";
import Container from "../wthiteboard/Container/ContainerStudent";
class Student extends Component {
  constructor(props) {
    super(props);

    console.log("PROPS from student", socket);
  }

  componentDidMount() {
    socket.on("sendDrawing", (payload) => {
      console.log(payload);
    });
  }

  // drawing(e) {
  //   e.preventDefault();
  //   console.log(e.target.id.value);
  //   console.log(socket);
  //   socket.emit("sendDrawing", { msg: e.target.id.value });
  // }

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

export default Student;
