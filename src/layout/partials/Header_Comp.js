import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { userLogout } from "../../api/userApi";
export const Header = () => {
  const history = useHistory();
  const logMeOut = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("InspectApp");
    userLogout();
    history.push("/");
  };

  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>Test</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/units">
            <Nav.Link>Units</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
