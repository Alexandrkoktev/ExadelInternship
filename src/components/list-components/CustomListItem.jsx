import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'

class CustomListItem extends React.Component {
  render(props) {
    //let { text } = props
    return (
      <ListGroup.Item>
        <Row>
          <Col xs={12}>Помогите мне жить</Col>
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
