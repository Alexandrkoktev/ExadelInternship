import React from "react";
// eslint-disable-next-line no-unused-vars
import { Button, Card, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { getUserDone } from "../../actions/user";
//import '../styles.sass'

class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({ username: value });
  };

  render() {
    const { setUser } = this.props;
    const { username } = this.state;
    console.log(username);
    return (
      <div className={"content"}>
        <Card style={{ width: "18rem", margin: "5rem auto" }}>
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
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                variant="dark"
                type="submit"
                onClick={() => setUser(this.state.username)}
              >
                Sign in
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userinfo: state.userinfo
});

const mapDispatchToProps = dispatch => ({
  setUser: username => {
    dispatch(
      getUserDone({
        lastName: username,
        firstName: username
      })
    );
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
