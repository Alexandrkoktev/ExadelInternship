// types
export const GET_NOTIFICATIONS = '[HOME] GET_NOTIFICATIONS'
export const GET_NOTIFICATIONS_SUCCESS = 'GET_NOTIFICATIONS_SUCCESS'
export const GET_NOTIFICATIONS_ERROR = 'GET_NOTIFICATIONS_ERROR'

// action handlers
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
