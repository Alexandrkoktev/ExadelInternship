import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Route extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.my_text,
      routeid: 'routes/route-info/' + props.routeid,
      buttontext: props.buttontext,
    }
  }

  render() {
    return (
      <ListGroup.Item>
        <Row>
          <Col sm={3}>{this.state.text}</Col>
          <Col>
            <Link to={this.state.routeid}>
              <Button variant="outline-dark" className="right">
                Route Info
              </Button>
            </Link>
            <Button variant="outline-danger" className="right">
              {this.state.buttontext}
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default Route
