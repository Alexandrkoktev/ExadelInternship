import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, Card, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/user'
// eslint-disable-next-line no-unused-vars
import Alert from 'react-bootstrap/Alert'
import './logIn.sass'

class LogIn extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChangeForLogIn = event => {
    const value = event.target.value
    this.setState({ username: value })
  }

  handleChangeForPassword = event => {
    const value = event.target.value
    this.setState({ password: value })
  }

  render() {
    const { setUser, isError } = this.props
    return (
      <div>
        {isError && (
          <Alert key={1} variant="danger" className={'alertForError'}>
            Invalid input
          </Alert>
        )}
        <Card className="cardItem">
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Login</Form.Label>
                <Form.Control
                  type="login"
                  value={this.state.username}
                  onChange={this.handleChangeForLogIn}
                  placeholder="Enter login"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  alue={this.state.password}
                  onChange={this.handleChangeForPassword}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="dark"
                type="submit"
                onClick={event => {
                  setUser(this.state.username, this.state.password)
                  event.preventDefault()
                }}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn)
