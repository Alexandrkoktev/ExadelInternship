import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'

class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.description,
    }
  }

  render() {
    return (
      <ListGroup.Item>
        <Row>
          <Col xs={10}>{this.state.description}</Col>
          <Col>
            <Button variant="outline-dark" className="right">
              Edit
            </Button>
            <Button variant="outline-danger" className="right">
              Delete
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default Car
