import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class PreviousRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.my_text,
    }
  }

  render() {
    return (
      <ListGroup.Item>
        <Row>
          <Col xs={8}>{this.state.text}</Col>
          <Col>
            <Button variant="outline-dark">PreviousRoute Info</Button>
            <Button variant="outline-danger">Delete</Button>
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default PreviousRoute
