import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup, Row, Col, Button, Badge } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import './style.sass'
import { formatDate } from '../../util'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/home'

class Route extends React.Component {
  render() {
    const { badge = '', styling = '', id, passenger } = this.props
    const { del, onDel } = this.props
    const deleted = () => {
      setTimeout(onDel, 1000)
    }
    const doDelete = del !== undefined
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
            {passenger && (<Link to={'routes/route-info/'.concat(id)}>
              <Button variant="outline-info" className="right">
                Route Info
              </Button>
            </Link>)}
            {!passenger && (<Link to={'routes/ride-info/'.concat(id)}>
              <Button variant="outline-info" className="right">
                Route Info
              </Button>
            </Link>)}
            {doDelete ?
              <Button variant="outline-danger" className="right" onClick={() => {
                del(id)
                deleted()
              }}>
                Delete
            </Button> : <></>}
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Route)
