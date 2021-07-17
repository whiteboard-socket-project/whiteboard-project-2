// import React, { Component } from "react";
// import "../table/table.css";
// import { socket } from "../Socket/Socket";

// export class UserTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // id: "",
//       // userName: "",
//       // created_at: "",
//       payload: {},
//     };
//   }

//   getUserInfo = () => {
//     socket.on("user_table", (payload) => {
//       this.setState({
//         // id: payload._id,
//         // userName: payload.studentName,
//         // created_at: payload.created_at,
//         payload: payload,
//       });
//     });
//   };

//   render() {
//     const info = this.state.payload.map((user) => {
//       return (
//         <li class="table-row" key={user.id}>
//           <div class="col col-1" data-label="Job Id">
//             {user.id}
//           </div>
//           <div class="col col-2" data-label="Customer Name">
//             {user.userName}
//           </div>
//           <div class="col col-3" data-label="Amount">
//             {user.created_at}
//           </div>
//         </li>
//       );
//     });

//     return (
//       <div class="container">
//         <h2>Users Information</h2>
//         <ul class="responsive-table">
//           <li class="table-header">
//             <div class="col col-1">User Id</div>
//             <div class="col col-2">User Name</div>
//             <div class="col col-3">Login Date</div>
//           </li>
//           {info}
//           {/* <li class="table-row">
//             <div class="col col-1" data-label="Job Id">
//               {this.state.id}
//             </div>
//             <div class="col col-2" data-label="Customer Name">
//               {this.state.userName}
//             </div>
//             <div class="col col-3" data-label="Amount">
//               {this.state.created_at}
//             </div>
//           </li> */}
//         </ul>
//       </div>
//     );
//   }
// }

// export default UserTable;
