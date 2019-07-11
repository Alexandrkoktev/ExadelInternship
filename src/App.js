import React from 'react'

import './App.css'
import Footer from './components/Footer'
import { Button, Card, Form, Navbar } from 'react-bootstrap'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' CarPool'}
            <Button
              variant="outline-light"
              type="submit"
              style={{ marginLeft: '48rem' }}
            >
              Statistics
            </Button>
            <Button
              variant="outline-light"
              type="submit"
              style={{ marginLeft: '1rem' }}
            >
              Routes
            </Button>
            <Button
              variant="outline-light"
              type="submit"
              style={{ marginLeft: '1rem' }}
            >
              Cars
            </Button>
            <Button
              variant="outline-light"
              type="submit"
              style={{ marginLeft: '1rem' }}
            >
              Profile
            </Button>
          </Navbar.Brand>
        </Navbar>
      </>
    )
  }
}
class Content extends React.Component {
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

export default App
