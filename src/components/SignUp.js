import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';

function SignUp() {
  const [now, setNow] = useState(60)
  return (
    <div>
      <h1 className='text-center'>Sign Up</h1>
      <Form className='fill-form'>

        <Form.Group className="mb-3" controlId="formUserName">
          <span>*</span><Form.Label>User Name</Form.Label>
          <Form.Control type="name" placeholder="User Name" required/>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <span >*</span><Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <span>*</span><Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <span>*</span><Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" required/>
        </Form.Group>
        <section style={{width: '50%'}}>
          <ProgressBar now={now} label={`${now}%`}  />
        </section>


        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}


        <Button variant="primary" type="submit" style={{marginTop: '30px'}}>
          Sign up
        </Button>
        </Form>

    </div>
    
  );
}

export default SignUp;




