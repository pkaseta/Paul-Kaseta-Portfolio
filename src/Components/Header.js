import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand href="/">Paul Kaseta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://github.com/pkaseta">My Github</Nav.Link>
              <Nav.Link href="/Resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
