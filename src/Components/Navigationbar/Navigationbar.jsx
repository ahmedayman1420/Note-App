import React from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";

function Navigationbar() {
  let location = useLocation();

  const logOut = () => {
    localStorage.clear();
  };

  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Note
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {location.pathname === "/" && (
              <Nav className="ml-auto">
                <Nav.Link as={NavLink} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link onClick={logOut} as={NavLink} to="/login">
                  Logout
                </Nav.Link>
              </Nav>
            )}

            {location.pathname !== "/" && (
              <Nav className="ml-auto">
                <Nav.Link as={NavLink} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
