import React from 'react'
import { ListGroup } from 'react-bootstrap'
import NotificationsItem from './NotificationsItem'
import '../../containers/notifications/notifications.sass'

class NotificationsList extends React.Component {
  render() {
    const { notifications, handleDelete } = this.props
    const notificationArr = notifications.map(item => {
      return (
        <NotificationsItem
          text={item.information}
          id={item.id}
          routeId={item.routeOrBookingId}
          key={item.id}
          handleDelete={handleDelete}
          driver={item.driver}
        />
      )
    })
    return (
      <ListGroup calssname="listForNotifications">{notificationArr}</ListGroup>
    )
  }
}

export default NotificationsList
