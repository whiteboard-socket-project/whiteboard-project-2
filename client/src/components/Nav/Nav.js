import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>ASAC WhiteBoard</li>
          <li>
            <Link to="/">Admin</Link>
          </li>
          <li>
            <Link to="/student">Student</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
