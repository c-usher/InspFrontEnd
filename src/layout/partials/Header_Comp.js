import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
      <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
          <Navbar.Brand>Test</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/units">Units</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
