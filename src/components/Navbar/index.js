import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function BasicExample() {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");
  return (
    <div className="homeNavbar-container">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src="/assets/LogoTwo.png" alt="navLogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav
              className="me-auto"
              // activeKey={active}
              // onSelect={(selectedKey) => setActive(selectedKey)}
            >
              <Nav.Link href="/" eventKey="home">
                Home
              </Nav.Link>
              <Nav.Link href="/how" eventKey="how">
                How It Works
              </Nav.Link>
              <Nav.Link href="/pricing" eventKey="pricing">
                Pricing
              </Nav.Link>
              <div className="nav-divider"></div>
              <Nav.Link href="/about" eventKey="about">
                About
              </Nav.Link>
              <Button
                className="nav-login-btn"
                onClick={() => navigate("/login")}
              >
                Log In
              </Button>
              <Button
                className="nav-sign-btn"
                onClick={() => navigate("/login")}
              >
                Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
