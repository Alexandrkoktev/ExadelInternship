import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import NotificationsItem from './NotificationsItem'
import '../../containers/notifications/notifications.sass'
class NotificationsList extends React.Component {
  render() {
    const { notifications, handleDelete } = this.props
    const notificationArr = notifications.map(item => {
      return (
        <NotificationsItem
          text={item.information}
          routeId={item.id}
          key={item.id}
          handleDelete={handleDelete}
        />
      )
    })
    return (
      <ListGroup calssname="listForNotifications">{notificationArr}</ListGroup>
    )
  }
}
export default NotificationsList
