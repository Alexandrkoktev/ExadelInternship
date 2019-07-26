import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import './style.sass'

class Route extends React.Component {
  render() {
    return (
      <ListGroup.Item>
        <Row>
          <Col xs={8}>
            {this.props.depPoint} <span className="oi oi-arrow-right" />{' '}
            {this.props.destPoint}
          </Col>
          <Col>
            <Link to={'routes/route-info/' + this.props.routeid}>
              <Button variant="outline-success" className="right">
                Route Info
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <span className="oi oi-clock" /> {this.props.depTime},{' '}
            {this.props.depDate}
          </Col>
          <Col>
            <Button variant="outline-danger" className="right">
              Delete
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default Route
