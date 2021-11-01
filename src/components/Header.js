//navigation header using react router dom and bootstrap

import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://www.ada.org/sites/default/files/images/ada-logo-white.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            ADA Shipyard
            </Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
                Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
                About
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Separated link
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar>
        );
    }
}

export default Header;