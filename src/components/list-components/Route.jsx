import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Route extends React.Component {
  render() {
    return (
      <ListGroup.Item>
        <Row>
          <Col xs={8}>{this.props.depPoint} -> {this.props.destPoint}</Col>
          <Col>
            <Link to={'routes/route-info/' + this.props.routeid}>
              <Button variant="outline-dark">Route Info</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={8}>Departure time: {this.props.depTime}</Col>
          <Col>
            <Button variant="outline-danger">Delete</Button>
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default Route
