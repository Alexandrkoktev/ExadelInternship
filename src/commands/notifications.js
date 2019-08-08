import {
  deleteNotificationDone,
  deleteNotificationError,
  deleteNotificationStarting,
  getNotificationsDone,
  getNotificationsError,
  getNotificationsStarting,
  sendMessageDone,
  sendMessageError,
  sendMessageStarting,
} from '../actions/notifications'
import client from './axios'
export const getNotifications = () => {
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

export const sendMessagePassenger = (bookingId, information) => {
  return async function(dispatch) {
    try {
      dispatch(sendMessageStarting())
      const data = JSON.stringify({ bookingId, information })
      await client({
        url: '/api/booking/message',
        method: 'post',
        data: data,
        headers: { 'Content-Type': 'application/json' },
      })
      dispatch(sendMessageDone())
    } catch (e) {
      dispatch(sendMessageError(e))
    }
  }
}

export const sendMessageDriver = (bookingId, information) => {
  return async function(dispatch) {
    try {
      dispatch(sendMessageStarting())
      const data = JSON.stringify({ bookingId, information })
      await client({
        url: '/api/activeRoute/message',
        method: 'post',
        data: data,
        headers: { 'Content-Type': 'application/json' },
      })
      dispatch(sendMessageDone())
    } catch (e) {
      dispatch(sendMessageError(e))
    }
  }
}

export const mapStateToProps = state => state.notifications

export const mapDispatchToProps = dispatch => ({
  requestNotifications: () => dispatch(getNotifications()),
  deleteNotification: id => dispatch(deleteNotification(id)),
  bookingMessage: (bookingId, information) =>
    dispatch(sendMessagePassenger(bookingId, information)),
  routeMessage: (bookingId, information) =>
    dispatch(sendMessageDriver(bookingId, information)),
})
