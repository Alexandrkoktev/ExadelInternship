import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, Col, ListGroup, Row } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'

class FavouriteRoute extends React.Component {
  render() {
    return (
      <ListGroup.Item>
        <Row>
          <Col xs={8}>
            {this.props.name.toUpperCase()}:
            <br />
            {this.props.depPoint} <span className="oi oi-arrow-right" />{' '}
            {this.props.destPoint}
          </Col>
          <Col>
            <Link to={'routes/route-info/' + this.props.routeid}>
              <Button variant="outline-info" className="right">
                Route Info
              </Button>
            </Link>
            <Button variant="outline-danger" className="right">
              Delete
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default FavouriteRoute
