import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';

function Login() {
 
  const [loggedInEmail, setLoggedInEmail] = useState('')
  const navigate = useNavigate()
  const userLogin = e => {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form))
    
    fetch('/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        if (res.error) {
          console.log(res.error)
          navigate('/login')
        } else {
          console.log(res.email)
          setLoggedInEmail(res.email)
          navigate('/')
        }
      })
  }

  useEffect(() => {
    fetch('/api/sessions')
    .then(res => res.json())
    .then(user => {
      if (typeof user.email === 'string') {
        console.log(user)
        setLoggedInEmail(user.email)
      }
    })
  }, [loggedInEmail])

  return (
    <div className="login-page">
      <h1>Login</h1>
      <Form className='fill-form' onSubmit={userLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <span>*</span><Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <span >*</span><Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;