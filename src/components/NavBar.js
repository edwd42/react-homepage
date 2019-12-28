import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../assets/css/navbar.css";
import { Contact } from "./Contact";

const Styles = styled.div`
  .navbar {
    height: 60px;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    text-decoration: none;
    color: #bbb;
    &:hover {
      color: white;
    }
  }

  a #projects {
    text-decoration: none;
    color: #000;
    &:hover {
      color: blue;
    }
  }

  /* a #projectsnavlink {
    &:hover {
      background-color: green;
      color: red;
    }
  } */

  a.dropdown-item {
    color: #000;
    &:hover {
      color: blue;
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
            {/* <NavDropdown.Item href="#">Projects Showcase</NavDropdown.Item> */}
            <Nav.Link id="projectsnavlink">
              <Link to="/projects" id="projects">
                Projects Showcase
              </Link>
            </Nav.Link>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="http://grid-hub.s3-website-us-east-1.amazonaws.com/"
              target="_blank"
            >
              Grid-Hub
            </NavDropdown.Item>
            <NavDropdown.Item
              href="http://yahoo-scraper.s3-website-us-east-1.amazonaws.com/"
              target="_blank"
            >
              Yahoo Scraper
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://edwd42.github.io/NewportDataProject/"
              target="_blank"
            >
              Leaflet Data Overlays
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Contact" id="contact">
            <Contact />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
