import {
  GET_NOTIFICATIONS,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_ERROR,
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
      const notifications  = action.payload
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
    default:
      return state
  }
}

export default reducer
