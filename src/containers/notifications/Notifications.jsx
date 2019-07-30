import React from 'react'
// eslint-disable-next-line no-unused-vars
import NotificationsList from '../../components/notifications-list/NotificationsList'
import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../commands/notifications'
import { connect } from 'react-redux'
import './notifications.sass'

class Notifications extends React.Component {
  componentDidMount() {
    this.props.requestNotifications()
  }
  handleDelete = () => {
    this.props.requestNotifications()
  }
  render() {
    const { notifications } = this.props
    return notifications.length === 0 ? (
      <div className="noStuff">No notifications yet </div>
    ) : (
      <div className="notificationList">
        <NotificationsList
          notifications={notifications}
          handleDelete={this.handleDelete.bind(this)}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications)
