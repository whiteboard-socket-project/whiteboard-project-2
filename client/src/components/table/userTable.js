import React, { Component } from "react";
import "../table/table.css";
import { socket } from "../Socket/Socket";

export class UserTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: [],
    };

    // socket.on("table", (data) => {
    //   this.setState({ userInfo: [...this.state.userInfo, data] });

    //   console.log("recived data", this.state.userInfo);
    // });
  }

  componentDidMount() {
    socket.on("table", (data) => {
      this.setState({ userInfo: data });

      console.log("recived data", this.state.userInfo);
    });
  }

  render() {
    console.log(this.state.userInfo);
    // const info = this.state.userInfo.map((user) => {
    //   return (
    //     <>
    //       <tr key={user._id}>
    //         <td>{user._id}</td>
    //         <td>{user.userName}</td>
    //         <td>{user.studntEmail}</td>
    //       </tr>
    //       ;
    //     </>
    //   );
    // });

    return (
      <>
        <div className="fix"></div>
        <h1>
          <span className="blue">&lt;</span>User Information
          <span className="blue">&gt;</span> <span className="yellow"></span>
        </h1>
        <div className="fix"></div>
        <h2>Welcome ! you are Registerd in our class =D</h2>

        <table class="containertable">
          <thead>
            <tr>
              <th>
                <h1>User ID</h1>
              </th>
              <th>
                <h1>User Name</h1>
              </th>
              <th>
                <h1>User Email</h1>
              </th>
              <th>
                <h1>Date of Login</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {info} */}

            {this.state.userInfo.map((user) => {
              return (
                <>
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.studentName}</td>
                    <td>{user.studntEmail}</td>
                    <td>{user.date}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default UserTable;
