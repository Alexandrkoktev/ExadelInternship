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

    }else{

    }
  }
  render() {
    return (
      <div onClick={()=>store.dispatch(push(this.state.routeId))}>
      <ListGroup.Item
        key={this.props.routeId}
        className="itemOfNotificationList"
        /* onMouseEnter={this.props.handleAction} */
      >
        <Row>
          <Col xs="10" md="11">
              {this.state.text}
          </Col>
          <Col xs="2" md="1">
            <span
              className="oi oi-x"
              onClick={(event)=>{
                event.stopPropagation()
                this.delete()
                setTimeout(this.props.handleDelete,1000)}}
            />
          </Col>
        </Row>
      </ListGroup.Item>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsItem)
