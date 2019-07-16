import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CustomListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.my_text,
      routeid: 'routes/route-info/' + props.routeid,
    }
  }

  render() {
    return (
      <ListGroup.Item>
        <Row>
          <Col xs={10}>{this.state.text}</Col>
          <Col>
            <Link to={this.state.routeid}>
              <Button variant="outline-dark">Route Info</Button>
            </Link>
            <Button variant="outline-danger">Delete</Button>
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default CustomListItem
