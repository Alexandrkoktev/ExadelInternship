// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, Col, ListGroup, Row } from 'react-bootstrap'
import '../list-components/style.sass'
import '../../containers/notifications/notifications.sass'
import { connect } from 'react-redux'
import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../commands/notifications'

class NotificationsItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text,
      routeId: 'routes/route-info/' + props.routeId,
      rideId: 'routes/ride-info/' + this.props.rideId,
      driver: props.driver,
    }
  }

  delete = () => {
    this.props.deleteNotification(this.props.routeId)
  }

  render() {
    const { driver } = this.props
    return (
      <ListGroup.Item
        key={this.props.routeId}
        className="itemOfNotificationList"
        /* onMouseEnter={this.props.handleAction} */
      >
        {!driver && (
          <Row>
            {' '}
            <Col xs="10" md="11">
              {' '}
              <a href={this.state.routeId} className="black">
                {this.state.text}
              </a>
            </Col>
            <Col xs="2" md="1">
              <span
                className="oi oi-x"
                onClick={() => {
                  this.delete()
                  this.props.handleDelete()
                }}
              />
            </Col>
          </Row>
        )}
        {driver && (
          <Row>
            {' '}
            <Col xs="10" md="11">
              {' '}
              <a href={this.state.rideId} className="black">
                {this.state.text}
              </a>
            </Col>
            <Col xs="2" md="1">
              <span
                className="oi oi-x"
                onClick={() => {
                  this.delete()
                  this.props.handleDelete()
                }}
              />
            </Col>
          </Row>
        )}
      </ListGroup.Item>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsItem)
