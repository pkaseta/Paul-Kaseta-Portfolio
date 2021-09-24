import React from "react";
import "./Header.css";
import { Navbar, Button, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'

function Header() {

  return (
    <>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand>
            <Link to='/' style={{ textDecoration: 'none' }}>Paul Kaseta</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://github.com/pkaseta">My Github</Nav.Link>
              <Link
                to='/Resume'
                style={{ textDecoration: 'none' }}
              >
                Resume
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
