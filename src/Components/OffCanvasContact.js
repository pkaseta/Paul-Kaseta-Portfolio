import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "./OffCanvasContact.css";
import ContactMe from "./ContactMe";

const OffCanvasContact = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Contact Me
      </Button>

      <Offcanvas show={show} onHide={handleClose} id='contact-offcanvas'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Form</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ContactMe handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvasContact;
