import {
  GET_CARS_DATA,
  GET_CARS_DATA_SUCCESS,
  GET_CARS_DATA_ERROR,
} from '../actions/cars'

const initialState = {
  cars: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARS_DATA:
      return {
        ...state,
        loading: true,
      }
    case GET_CARS_DATA_SUCCESS:
      const { cars } = action.payload
      return {
        ...state,
        loading: false,
        cars,
      }
    case GET_CARS_DATA_ERROR:
      const { error } = action
      return {
        ...state,
        loading: false,
        error,
      }
    default:
      return state
  }
}

export default reducer
