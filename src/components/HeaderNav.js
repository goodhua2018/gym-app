import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function HeaderNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Navbar scrol</Navbar.Brand>
        {/* <Link to="/">Navbar scrol</Link> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            
            <Nav.Link as={Link} to="/gym">Gym Nearby</Nav.Link>
            <Nav.Link as={Link} to="/gymathome">Exercise At Home</Nav.Link>
            
            <Nav.Link as={Link} to="/signup" >Sign up</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            
          </Nav>


         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;