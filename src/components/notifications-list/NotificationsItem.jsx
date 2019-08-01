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

import { push } from 'connected-react-router'
import { store } from '../../store/store'

class NotificationsItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text,
      routeId: 'routes/route-info/' + props.routeId,
      rideId: 'routes/ride-info/' + props.rideId,
      driver: props.driver,
    }
  }

  delete = () => {
    this.props.deleteNotification(this.props.id)
  }
  handleClick = (event) => {
    let click = event.target
  }

  isDriver(driver) {
    if (driver) {
      return (
        <div onClick={() => store.dispatch(push(this.state.routeId))}>
          <ListGroup.Item
            key={this.props.routeId}
            className="itemOfNotificationList"
          >
            <Row>
              <Col xs="10" md="11">
                {this.state.text}
              </Col>
              <Col xs="2" md="1">
            <span
              className="oi oi-x"
              onClick={(event) => {
                event.stopPropagation()
                this.delete()
                setTimeout(this.props.handleDelete, 1000)
              }}
            />
              </Col>
            </Row>
          </ListGroup.Item>
        </div>
      )
    }
  }

  isPassenger(driver) {
    if (!driver) {
      return (
        <div onClick={() => store.dispatch(push(this.state.rideId))}>
          <ListGroup.Item
            key={this.props.routeId}
            className="itemOfNotificationList"
          >
            <Row>
              <Col xs="10" md="11">
                {this.state.text}
              </Col>
              <Col xs="2" md="1">
            <span
              className="oi oi-x"
              onClick={(event) => {
                event.stopPropagation()
                this.delete()
                setTimeout(this.props.handleDelete, 1000)
              }}
            />
              </Col>
            </Row>
          </ListGroup.Item>
        </div>
      )
    }
  }

  render() {
    const { driver } = this.props
    return ([
        this.isDriver(driver),
        this.isDriver(driver),
      ]
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsItem)
