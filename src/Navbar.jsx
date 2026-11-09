import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg" className="site-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-name">
          <span className="brand-mark">S</span>
          ServiceHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="servicehub-navigation" />
        <Navbar.Collapse id="servicehub-navigation">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <a className="nav-contact" href="#services">
              Voir les services
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
