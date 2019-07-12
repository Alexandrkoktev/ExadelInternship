import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import '../styles.sass'
class AuthForm extends React.Component {
  render() {
    return (
      <div className={'content'}>
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
              <Button
                variant="dark"
                type="submit"
                onClick={() => alert('Signing...')}
              >
                Sign in
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
export default AuthForm
