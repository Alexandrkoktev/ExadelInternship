import React from 'react'
// eslint-disable-next-line no-unused-vars
import NotificationsList from '../../components/notifications-list/NotificationsList'
import { mapDispatchToProps, mapStateToProps } from '../../commands/notifications'
import { connect } from 'react-redux'

class Notifications extends React.Component {
  componentDidMount() {
    this.props.requestNotifications()
  }

  render() {
    const { notifications } = this.props
    return <NotificationsList notifications={notifications}/>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifications)