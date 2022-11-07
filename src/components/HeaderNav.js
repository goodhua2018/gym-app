import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import HeaderLoginNav from './HeaderLoginNav';
import Location from './Location';

function HeaderNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Lucky Gym</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '120px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/gym">Gym Nearby</Nav.Link>
            <Nav.Link as={Link} to="/gymathome">Exercise At Home</Nav.Link>
            <Nav.Link as={Link} to="/video">Watch Video to Learn</Nav.Link>
          </Nav>
          < Location />
          < HeaderLoginNav />
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  )
}

export default HeaderNav;