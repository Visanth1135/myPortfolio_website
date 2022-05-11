import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";



const LoginForm = ({ onSubmit }) => {
  
  return (
    <Form onSubmit={onSubmit}>
    <div className="container">
    <input  type="text" placeholder="Your name.."></input>
    <input type="text" placeholder="Last name.."></input>
    <input type="text" placeholder="Age"></input>
    <input type="text" placeholder="Place"></input>
    </div>
      <Button variant="primary" type="submit" block>
        Login
      </Button>
    </Form>
  );
};

export default function App() {
  const [show, setShow] = useState(false);
  const [button, setButton] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
    <div class = "d-flex justify-content-between">
    <div class="btn-group-vertical p-3">
    <button type="button" class="btn btn-info btnvar">Session/Auth</button>
    <button type="button" class="btn btn-info btnvar">Master</button>
    <button type="button" class="btn btn-info btnvar">Order</button>
    <button onClick={()=>setButton(true)} type="button" class="btn btn-info btnvar">Employee</button>
    <button type="button" class="btn btn-info btnvar">Customer</button>
    <button type="button" class="btn btn-info btnvar">Stock audit</button>
    <button type="button" class="btn btn-info btnvar">Stock</button>
    </div>
    {button?
      <div className="justify-content-md-end p-3 ">
      
      <Button className="btn-primary" variant="primary" onClick={handleShow}>
      Add Employee
      </Button>
      </div>:null
    }
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm onSubmit={onLoginFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}