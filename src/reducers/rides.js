import {
  GET_RIDES_DATA,
  GET_RIDES_DATA_SUCCESS,
  GET_RIDES_DATA_ERROR,
} from '../actions/rides'

const initialState = {
  rides: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_RIDES_DATA:
      return {
        ...state,
      }
    case GET_RIDES_DATA_SUCCESS:
      const  rides  = action.payload
      return {
        ...state,
        rides,
      }
    case GET_RIDES_DATA_ERROR:
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
