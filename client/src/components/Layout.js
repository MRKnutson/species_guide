import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Outlet } from 'react-router-dom';

const Layout = () => {

  return(
    <>
      <Navbar bg = "dark" variant = "dark">
        <Container>
          <Navbar.Brand href = "/">HomePage</Navbar.Brand>
          <Navbar.Toggle aria-controls="response-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href = "/">Home</Nav.Link>
              <Nav.Link href = "/login">Login</Nav.Link>
              <Nav.Link href = "/register">New User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;