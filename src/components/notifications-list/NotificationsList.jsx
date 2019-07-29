import React from 'react'
import { ListGroup } from 'react-bootstrap'
import NotificationsItem from './NotificationsItem'

class NotificationsList extends React.Component {
  render() {
    const { notifications } = this.props
    const notificationArr = notifications.map(item => {
      return (
        <NotificationsItem
          text={item.information}
          routeId={item.activeRouteId}
          key={item.activeRouteId}
        />
      )
    })
    return <ListGroup>{notificationArr}</ListGroup>
  }
}
export default NotificationsList
