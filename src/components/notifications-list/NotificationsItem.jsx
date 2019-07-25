// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button, Col, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NotificationsItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text,
      routeId: 'routes/route-info/' + props.routeId,
    }
  }
  render() {
    return (
      <ListGroup.Item key={Math.random()}>
        <Row>
          <Col xs={8}>{this.state.text}</Col>
          <Col>
            <Link to={this.state.routeId}>
              <Button variant="outline-dark">Route Info</Button>
            </Link>
            <Button variant="outline-danger">Decline</Button>
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}
