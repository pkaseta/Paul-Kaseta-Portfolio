import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "./OffCanvasContact.css";
import ContactMe from "./ContactMe";

const OffCanvasContact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Contact Me
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contacct Form</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ContactMe />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvasContact;
