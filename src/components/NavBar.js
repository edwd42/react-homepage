import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../assets/css/navbar.css";
import { Contact } from "./Contact";
import { Projects } from "./Projects";

const Styles = styled.div`
  .navbar {
    background-color: red;
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
            <Projects />
          </NavDropdown>
          <NavDropdown title="Contact" id="contact">
            <Contact />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);