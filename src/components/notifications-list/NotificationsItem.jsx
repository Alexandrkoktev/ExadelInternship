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
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import { push } from "connected-react-router"
import {store} from '../../store/store'

class NotificationsItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text,
      routeId: 'routes/route-info/' + props.routeId,
    }
  }
  delete = () => {
    this.props.deleteNotification(this.props.id)
  }
  handleClick=(event) =>{
    let click=event.target
    if(click.className==="oi oi-x"){
      this.delete()
      this.props.handleDelete()
    }else{
      store.dispatch(push(this.state.routeId))
    }
  }
  render() {
    return (
      <ListGroup.Item
        key={this.props.routeId}
        className="itemOfNotificationList"
        /* onMouseEnter={this.props.handleAction} */
        onClick={(event)=> this.handleClick(event)}
      >
        <Row>
          <Col xs="10" md="11">
              {this.state.text}
          </Col>
          <Col xs="2" md="1">
            <span
              className="oi oi-x"
            />
          </Col>
        </Row>
      </ListGroup.Item>

    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsItem)
