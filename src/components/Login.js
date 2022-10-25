import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Form className='fill-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <span>*</span><Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <span >*</span><Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>

      
        <Button variant="primary" type="submit">
        Login
      </Button>
      
     
      
    </Form>
    <Button variant="primary" type="submit">
    Login as Guest
    </Button>
    </div>
    
  );
}

export default Login;