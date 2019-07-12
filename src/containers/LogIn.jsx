import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

class LogIn extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem', margin: '5rem auto' }}>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicLogin">
              <Form.Label>Login</Form.Label>
              <Form.Control type="login" placeholder="Enter login" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="dark" type="submit">
              Sign in
            </Button>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

export default LogIn
