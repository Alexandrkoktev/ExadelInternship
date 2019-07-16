import React from 'react'
import { Row, Col } from 'react-bootstrap'

class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={3}>.....</Col>
          <Col>{this.username}</Col>
        </Row>
      </div>
    )
  }
}

export default UserInfo
