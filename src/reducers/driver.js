import {
  GET_DRIVER_DATA,
  GET_DRIVER_DATA_SUCCESS,
  GET_DRIVER_DATA_ERROR,
} from '../actions/driver'

const initialState = {
  passengers: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVER_DATA:
      return {
        ...state,
      }
    case GET_DRIVER_DATA_SUCCESS:
      const { passengers } = action.payload
      return {
        ...state,
        passengers,
      }
    case GET_DRIVER_DATA_ERROR:
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
