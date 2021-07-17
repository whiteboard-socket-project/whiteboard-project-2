import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export class LogIn extends Component {
    render() {
        return (
            <>
                <Modal.Dialog>
                    <Modal.Header  >
                        <Modal.Title>Register in Student Class</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Label > ADD YOUR NAME </Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="your name ...."
                                required
                            />
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">CLOSE</Button>
                        {/* <Button variant="primary" onClick={() => { }}>LOGIN</Button> */}
                        <Button variant="warning"> <Link className="button" activeClassName="is-active" to="/student">
                            Login
                        </Link>  </Button>
                    </Modal.Footer>
                </Modal.Dialog >



            </>
        );
    }
}
export default LogIn;