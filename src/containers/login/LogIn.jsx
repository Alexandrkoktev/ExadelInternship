import React from 'react'
// eslint-disable-next-line no-unused-vars

import { Button, Card, Form } from 'react-bootstrap'

import { connect } from 'react-redux'
import { getUserDone, getUserError, getUserStarting } from '../../actions/user'

//import '../styles.sass'

class LogIn extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
    }
  }

  handleChange = event => {
    const value = event.target.value
    this.setState({ username: value })
  }

  render() {
    const { setUser } = this.props
    const { username } = this.state
    return (
      <div className={'content'}>
        <Card style={{ width: '18rem', margin: '5rem auto' }}>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Login</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Enter login"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Check me out"/>
              </Form.Group>
              <Button
                variant="dark"
                type="submit"
                onClick={(event) => {
                  setUser(this.state.username)
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

const mapStateToProps = state => ({
  userinfo: state.userinfo,
})

export function delay(data, time = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, time)
  })
}

const fakeUser = (email, password) => {
  return delay({
    lastName: email,
    firstName: email,
    role: '',
    email: email,
  })
}

const getUser = (email, password) => {
  // redux-thunk
  return async function(dispatch) {
    try {
      dispatch(getUserStarting())
      const userInfo = await fakeUser(email, password);
      dispatch(getUserDone(userInfo))
    } catch (e) {
      dispatch(getUserError(e))
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (email, password) => dispatch(getUser(email, password)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogIn)


