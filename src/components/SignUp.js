import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {useNavigate } from 'react-router-dom';


function SignUp() {
  const [now, setNow] = useState(0)
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [color, setColor] = useState('')

  const navigate = useNavigate()
  
  const createUser = e => {
    e.preventDefault()
    const form = e.target 
    const data = Object.fromEntries(new FormData(form))
    console.log(data)

    fetch('/api/users', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
          if (res.error) {
              console.log(res.error)
              navigate('/signup')
          } else {
            // back to the main page 
              console.log(res)
              navigate('/login')
          }     
      })
  }
  const passwordStrong = () => {
    if (password.length === 0) {
      setNow(0)
    } else if ( password.length <= 3) {
      setNow(33.34)
      setMsg("Weak")
      setColor('danger')
    } else if (password.length > 3 && password.length < 7) {
      setNow(66.67)
      setMsg("Medium")
      setColor('warning')
    } else {
      setNow(100)
      setMsg("Strong")
      setColor('success')
    }
  }

  useEffect(() => {
    passwordStrong()
  }, [password])


  return (
    <div>
      <h1 className='text-center'>Sign Up</h1>
      <Form className='fill-form' onSubmit={e => createUser(e)}>

        <Form.Group className="mb-3" controlId="formUserName">
          <span>*</span><Form.Label>User Name</Form.Label>
          <Form.Control type="name" name="userName" placeholder="User Name" required/>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <span >*</span><Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <span>*</span><Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password"  placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <span>*</span><Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="confirmPassword"  placeholder="Confirm Password" required/>
        </Form.Group>

        <section style={{width: '50%'}}>
          <ProgressBar variant={color} now={now} label={msg}  />
        </section>

        <Button variant="primary" type="submit" style={{marginTop: '30px'}} >
          Sign up
         </Button>
        </Form>

    </div>
    
  );
}

export default SignUp;




