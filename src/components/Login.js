import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react'

function Login() {
  const [loggedInEmail, setLoggedInEmail] = useState('')

  const userLogin = e => {
    e.preventDefault()
    const form = e.target
  
    const data = Object.fromEntries(new FormData(form))
    // console.log(data)
    
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
        } else {
          console.log(res.email)
          setLoggedInEmail(res.email)
          
        }
      })
  }

  useEffect(() => {
    console.log(loggedInEmail)
  }, [loggedInEmail])

  const guestLogin = () => {
    setLoggedInEmail('guest@guest')
  }

  return (
    <div>
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
      <Button variant="primary" type="submit" onClick={guestLogin}>Login as Guest</Button>
    </div>
    
  );
}

export default Login;