import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'

class CarsListItem extends React.Component {
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
            <Button variant="outline-dark">Edit</Button>
            <Button variant="outline-danger">Delete</Button>
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default CarsListItem
