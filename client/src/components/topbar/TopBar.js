import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function TopBar() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' sticky='top'>
      <Container>
        <Navbar.Brand className='text-center'>
          Terry Hunt
          <small className='d-flex'>Full-Stack Developer Freelancer</small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='m-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/'>About</Nav.Link>
            <Nav.Link href='/'>Resume</Nav.Link>
            <Nav.Link href='/'>Works</Nav.Link>
            <Nav.Link href='/'>Testimonials</Nav.Link>
            <Nav.Link href='/'>Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/'>Github</Nav.Link>
            <Nav.Link href='/'>LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
