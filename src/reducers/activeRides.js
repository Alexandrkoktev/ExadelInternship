import {
  GET_ACTIVE_RIDES_DATA,
  GET_ACTIVE_RIDES_DATA_SUCCESS,
  GET_ACTIVE_RIDES_DATA_ERROR,
} from '../actions/activeRides'

const initialState = {
  activeRides: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVE_RIDES_DATA:
      return {
        ...state,
      }
    case GET_ACTIVE_RIDES_DATA_SUCCESS:
      const activeRides = action.payload
      return {
        ...state,
        activeRides,
      }
    case GET_ACTIVE_RIDES_DATA_ERROR:
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
