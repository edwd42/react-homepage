import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Contact } from "./Contact";

const Styles = styled.div`
  .navbar {
    background-color: #222;
    height: 60px;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
  .contact a {
    text-decoration: none;
    color: #000;
    &:hover {
      color: blue;
    }
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand>
        <Nav.Item>
          <Nav.Link>
            <Link to="/">&lt;/&gt;&nbsp;Edward Dupre</Link>
          </Nav.Link>
        </Nav.Item>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Projects" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Contact" id="collasible-nav-dropdown">
            <Contact />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
