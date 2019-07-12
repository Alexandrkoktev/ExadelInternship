import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'

class CustomListItem extends React.Component {
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
          <Col xs={10}> I am a {this.state.text}</Col>
          <Col>
            <Button variant="outline-dark">Route Info</Button>
            <Button variant="outline-danger">Bish Bye</Button>
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default CustomListItem
