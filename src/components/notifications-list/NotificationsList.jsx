import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import NotificationsItem from './NotificationsItem'

class NotificationsList extends React.Component {
  render() {
    let list = []
    for (let i = 0; i < this.props.size; i++) {
      list.push(<NotificationsItem text={'Notification'} routeId={i} />)
    }
    return <ListGroup>{list}</ListGroup>
  }
}
export default NotificationsList
