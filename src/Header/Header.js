import React from 'react'
import { Button, Col, Container, Form, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import { Routes, Route, Link } from "react-router-dom";
import './Header.css'
import Home from '../Home/Home';

import Single from '../Single';
import Cat from '../Cat';

function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-dark text-white ">
      <Container>
      <i class="fa-brands fa-facebook px-2"></i>
      <i class="fa-brands fa-instagram px-2"></i>
      <i class="fa-brands fa-linkedin px-2"></i>
      <i class="fa-brands fa-twitter px-2"></i>
      <i class="fa-brands fa-youtube px-2"></i>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Deutsch
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Português</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              العربية
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='text-light' href="#home"><i class="fa-solid fa-user px-1"></i>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className='nav-link' to="/">NEWZ</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/cat/general">General</Link>
            <Link className='nav-link' to="/cat/business">Business</Link>
            <Link className='nav-link' to="/cat/Technology">technology</Link>
            <Link className='nav-link' to="/cat/Sports">Sports</Link>
           
          </Nav>
        </Navbar.Collapse>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search for.."
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Single />} />
        <Route path="/cat/:cid" element={<Cat />} />
      </Routes>
    </>
  )
}

export default Header