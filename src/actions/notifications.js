export const GET_NOTIFICATIONS = '[HOME] GET_NOTIFICATIONS'
export const GET_NOTIFICATIONS_SUCCESS = 'GET_NOTIFICATIONS_SUCCESS'
export const GET_NOTIFICATIONS_ERROR = 'GET_NOTIFICATIONS_ERROR'
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'
export const DELETE_NOTIFICATION_SUCCESS = 'DELETE_NOTIFICATION_SUCCESS'
export const DELETE_NOTIFICATION_ERROR = 'DELETE_NOTIFICATION_ERROR'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const SEND_MESSAGE_ERROR = 'SEND_MESSAGE_ERROR'

export function getNotificationsStarting() {
  return {
    type: GET_NOTIFICATIONS,
  }
}

export function getNotificationsDone(notifications) {
  return {
    type: GET_NOTIFICATIONS_SUCCESS,
    payload: notifications,
  }
}

export function getNotificationsError(error) {
  return {
    type: GET_NOTIFICATIONS_ERROR,
    error,
  }
}
export function deleteNotificationStarting() {
  return {
    type: DELETE_NOTIFICATION,
  }
}

export function deleteNotificationDone() {
  return {
    type: DELETE_NOTIFICATION_SUCCESS,
  }
}

export function deleteNotificationError(error) {
  return {
    type: DELETE_NOTIFICATION_ERROR,
    error,
  }
}

export function sendMessageStarting() {
  return {
    type: SEND_MESSAGE,
  }
}

export function sendMessageDone() {
  return {
    type: SEND_MESSAGE_SUCCESS,
  }
}

export function sendMessageError(error) {
  return {
    type: SEND_MESSAGE_ERROR,
    error,
  }
}
