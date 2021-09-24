import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import "./ContactMe.css";
import emailjs from "emailjs-com";

function ContactMe(props) {
  const { handleClose } = props
  const form = useRef();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: ''
  })

  const USER_ID = process.env.REACT_APP_EMAILJS_USER_KEY;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

  const sendEmail = e => {
    let formSelector = document.querySelector("#reactForm");
    console.log(formSelector);
    e.preventDefault();
    console.log(USER_ID);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formSelector, USER_ID).then(
      result => {
        console.log(result.text);
        handleClose();
      },
      error => {
        console.log(error.text);
      }
    );
  };

  const onChangehandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  console.log(formData)
  return (
    <div className="contactForm">
      <Form ref={form} onSubmit={sendEmail} id="reactForm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name='email' onChange={onChangehandler} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" name='name' onChange={onChangehandler} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="555-555-5555" name='phone' onChange={onChangehandler} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name='message' onChange={onChangehandler} />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactMe;
