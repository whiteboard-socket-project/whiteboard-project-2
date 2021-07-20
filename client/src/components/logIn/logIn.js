import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import "../logIn/login.css";
import { socket } from "../Socket/Socket";

export class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      date: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...this.state,
      date: new Date().toString(),
    };
    console.log("hello", payload);

    socket.emit("save", payload);
  };

  render() {
    return (
      <div className="container" onclick="onclick">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <h2>Please Sign In</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              required
              type="text"
              name="studentName"
              placeholder="your name ..."
              onChange={this.handleChange}
            />
            <input
              required
              type="text"
              name="studntEmail"
              placeholder="example@email.com ..."
              onChange={this.handleChange}
            />
            {/* <Link
              className="button enas"
              activeClassName="is-active"
              to="/student"
            >
              <input className="button enas" type="submit" value="Login" />
            </Link> */}
            {/* <div className="of"> */}
            <a className="button enas" href="/student">
              <input
                className="button enas"
                type="submit"
                value="Login"
              ></input>
            </a>

            <a className="button enas" href="/table">
              <input
                className="button enas"
                type="button"
                value="Student Info."
              ></input>
            </a>
            {/* </div> */}
            {/* <Link to="/student">
              <button type="submit">Login</button>
            </Link> */}
          </form>
          <h2>&nbsp;</h2>
        </div>
      </div>
    );
  }
}
export default LogIn;
