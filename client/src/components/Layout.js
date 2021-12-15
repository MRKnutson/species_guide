import React, { useContext } from 'react'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Layout = () => {
  const navigate = useNavigate();

  const {authenticated, handleLogout} = useContext(AuthContext);

  const renderUILinks =()=>{
    if(authenticated){
      return(
        <Button onClick={()=>handleLogout(navigate)}>Logout</Button>
      )
    } else {
      return(
        <>
          <Nav.Link href = "/login">Login</Nav.Link>
          <Nav.Link href = "/register">New User</Nav.Link>
        </>
      )
    };
  };

  return(
    <>
      <Navbar expand = "md" bg = "dark" variant = "dark">
        <Container>
          <Navbar.Brand href = "/">HomePage</Navbar.Brand>
          <Navbar.Toggle aria-controls="response-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href = "/">Home</Nav.Link>
              {renderUILinks()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;