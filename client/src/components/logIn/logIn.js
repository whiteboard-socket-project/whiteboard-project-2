import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import "../logIn/login.css";
export class LogIn extends Component {
    render() {
        return (
            //   <>
            //     <Modal.Dialog>
            //       <Modal.Header>
            //         <Modal.Title>Register in Student Class</Modal.Title>
            //       </Modal.Header>
            //       <Modal.Body>
            //         <Form>
            //           <Form.Label> ADD YOUR NAME </Form.Label>
            //           <Form.Control
            //             type="text"
            //             name="name"
            //             placeholder="your name ...."
            //             required
            //           />
            //         </Form>
            //       </Modal.Body>
            //       <Modal.Footer>
            //         <Button variant="secondary">CLOSE</Button>
            //         {/* <Button variant="primary" onClick={() => { }}>LOGIN</Button> */}
            //         <Button variant="warning">
            //           {" "}
            //           <Link
            //             className="button"
            //             activeClassName="is-active"
            //             to="/student"
            //           >
            //             Login
            //           </Link>{" "}
            //         </Button>
            //       </Modal.Footer>
            //     </Modal.Dialog>
            //   </>
            <div className="container" onclick="onclick">
                <div className="top"></div>
                <div className="bottom"></div>
                <div className="center">
                    <h2>Please Sign In</h2>
                    <input type="text" placeholder="your name ..." />
                    {/* <input type="password" placeholder="password" /> */}
                    <Link className="button" activeClassName="is-active" to="/student">
                        Login
                    </Link>
                    <h2>&nbsp;</h2>
                </div>
            </div>
        );
    }
}
export default LogIn;