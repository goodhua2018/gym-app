import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CheckLogin from '../commonMethod/CheckLogin';

function HeaderNav() {
  const [loggedInEmail, setLoggedInEmail] = useState('')
  console.log(loggedInEmail)

  useEffect(() => {
    console.log(loggedInEmail)
  }, [])


  if (loggedInEmail) {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          
          <Navbar.Brand as={Link} to="/">Strengthing</Navbar.Brand>
         
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

            </Nav>
            <button>Log out</button>
          </Navbar.Collapse>
        </Container>
        < CheckLogin checkEmail={setLoggedInEmail}/>
      </Navbar>
      
    );
  } else {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          
          <Navbar.Brand as={Link} to="/">Strengthing</Navbar.Brand>
         
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
    
            </Nav>
            {}
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '120px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/signup" >Sign up</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
        < CheckLogin checkEmail={setLoggedInEmail}/>
      </Navbar>
      
    );
  }
  
}

export default HeaderNav;