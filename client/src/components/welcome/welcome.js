import React, { Component } from "react";
// import backgroundVedio from "../welcome/welcome.jpg";
import "../welcome/welcome.css";
import { Link } from "react-router-dom";
// import Main from "../main/Main";
export class Welcome extends Component {
  showToggle = () => {};
  render() {
    return (
      <>
        <header id="showcase">
          <p className="welcome">Welcome To The 401 Canvas Whiteboard</p>
          <p></p>
          {/* <a href={} class="button">
            INSTRUCTOR
          </a> */}
          <div className="start">
            <Link className="button" activeClassName="is-active" to="/admin">
              INSTRUCTOR
            </Link>
            {/* <a href={} class="button">
            STUDENT
          </a> */}
            <Link className="button" activeClassName="is-active" to="/login">
              STUDENT
            </Link>
          </div>
        </header>
      </>
    );
  }
}
export default Welcome;
