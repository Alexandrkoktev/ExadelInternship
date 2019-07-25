import {
  getNotificationsDone,
  getNotificationsError,
  getNotificationsStarting,
} from '../actions/notifications'
import client from './axios'

export const mapStateToProps = state => state.notifications

export const mapDispatchToProps = dispatch => ({
  requestNotifications: () => dispatch(getNotifications()),
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
