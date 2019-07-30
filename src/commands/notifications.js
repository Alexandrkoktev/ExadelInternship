import {
  deleteNotificationDone,
  deleteNotificationError,
  deleteNotificationStarting,
  getNotificationsDone,
  getNotificationsError,
  getNotificationsStarting,
} from '../actions/notifications'
import client from './axios'

export const mapStateToProps = state => state.notifications

export const mapDispatchToProps = dispatch => ({
  requestNotifications: () => dispatch(getNotifications()),
  deleteNotification: id => dispatch(deleteNotification(id)),
})

export const getNotifications = () => {
  // redux-thunk
  return async function(dispatch) {
    try {
      dispatch(getNotificationsStarting())
      const { data } = await client({
        url: '/api/notifications',
        method: 'get',
      })
      dispatch(getNotificationsDone(data))
    } catch (e) {
      dispatch(getNotificationsError(e))
    }
  }
}
export const deleteNotification = id => {
  return async function(dispatch) {
    try {
      dispatch(deleteNotificationStarting())
      const data = JSON.stringify(id)
      await client({
        url: '/api/notification',
        method: 'delete',
        data: data,
        headers: { 'Content-Type': 'application/json' },
      })
      dispatch(deleteNotificationDone())
    } catch (e) {
      dispatch(deleteNotificationError(e))
    }
  }
}
