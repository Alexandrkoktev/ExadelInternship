import {
  GET_NOTIFICATIONS,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_ERROR,
  DELETE_NOTIFICATION,
  DELETE_NOTIFICATION_SUCCESS,
  DELETE_NOTIFICATION_ERROR,
} from '../actions/notifications'

const initialState = {
  notifications: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_NOTIFICATIONS:
      return {
        ...state,
      }
    case GET_NOTIFICATIONS_SUCCESS:
      const notifications = action.payload
      return {
        ...state,
        notifications,
      }
    case GET_NOTIFICATIONS_ERROR:
      const { error } = action
      return {
        ...state,
        error,
      }
    case DELETE_NOTIFICATION:
      return {
        ...state,
        loading: true,
      }
    case DELETE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case DELETE_NOTIFICATION_ERROR: {
      const { error } = action
      return {
        ...state,
        loading: false,
        error,
      }
    }
    default:
      return state
  }
}

export default reducer
