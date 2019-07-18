import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Route extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      depPoint: props.depPoint,
      destPoint: props.destPoint,
      depTime: props.depTime,
      routeid: 'routes/route-info/' + props.routeid,
    }
  }

  render() {
    return (
      <ListGroup.Item>
        <Row>
          <Col xs={8}>{this.state.depPoint} -> {this.state.destPoint}</Col>
          <Col>
            <Link to={this.state.routeid}>
              <Button variant="outline-dark">Route Info</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={8}>Departure time: {this.state.depTime}</Col>
          <Col>
            <Button variant="outline-danger">Delete</Button>
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default Route
