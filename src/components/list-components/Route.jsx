import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup, Row, Col, Button, Badge } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import './style.sass'
import { formatDate } from '../../util'

class Route extends React.Component {
  render() {
    debugger
    const { badge = '', styling = '', routeid, rideid, passenger } = this.props
    return (
      <ListGroup.Item className={styling}>
        <Row>
          <Col xs={8}>
            {this.props.depPoint} <span className="oi oi-arrow-right" />{' '}
            {this.props.destPoint} <Badge variant="info">{badge}</Badge>
            <br />
            <span className="oi oi-clock" />{' '}
            {formatDate(new Date(this.props.depTime))}
          </Col>
          <Col>
            {passenger && ( <Link to={'routes/route-info/' + routeid}>
              <Button variant="outline-info" className="right">
                Route Info
              </Button>
            </Link>)}
            {!passenger && ( <Link to={'routes/ride-info/' + rideid}>
              <Button variant="outline-info" className="right">
                Route Info
              </Button>
            </Link>)}
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