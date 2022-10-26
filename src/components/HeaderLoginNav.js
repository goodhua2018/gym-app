import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CheckLogin from '../commonMethod/CheckLogin';

export default function HeaderLoginNav() {
  const [loggedInEmail, setLoggedInEmail] = useState(null)
  console.log(loggedInEmail)

  function logout() {
    fetch('/api/sessions', {
      method: 'DELETE'
    })
    .then(() => {
      setLoggedInEmail(null)
    })
  }

  useEffect(() => {
    fetch('/api/sessions')
    .then(res => res.json())
    .then(user => {
      if (typeof user.email === 'string') {
        console.log(user)
        setLoggedInEmail(user.email) 
        console.log(loggedInEmail)
      } else {
        console.log('no one log in')
      }
    })
  }, [loggedInEmail])

  if (loggedInEmail) {
    return (
      <div>
        <Nav
          className="ms-auto my-2 my-lg-0"
          style={{ maxHeight: '120px' }}
          navbarScroll
        >
        <Nav.Link  
          onClick={logout}
        >Log out</Nav.Link>
        <Nav.Link as={Link} to="/myplan">My Plan</Nav.Link>
      </Nav>
      </div>
      
    )
  } else {
    return (
      <div>
        <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '120px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/signup" >Sign up</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      </Nav>
      

      </div>
            
           
     

  )
  }
  
}
