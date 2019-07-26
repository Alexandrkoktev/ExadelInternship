import {
  GET_CARS_DATA,
  GET_CARS_DATA_SUCCESS,
  GET_CARS_DATA_ERROR,
  PUT_CARS_DATA,
  PUT_CARS_DATA_SUCCESS,
  PUT_CARS_DATA_ERROR,
  POST_CARS_DATA,
  POST_CARS_DATA_SUCCESS,
  POST_CARS_DATA_ERROR,
  DELETE_CARS_DATA,
  DELETE_CARS_DATA_ERROR,
  DELETE_CARS_DATA_SUCCESS,
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
      const cars = action.payload
      return {
        ...state,
        loading: false,
        cars,
      }
    case GET_CARS_DATA_ERROR: {
      const { error } = action
      return {
        ...state,
        loading: false,
        error,
      }
    }
    case PUT_CARS_DATA:
      return {
        ...state,
        loading: true,
      }
    case PUT_CARS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case PUT_CARS_DATA_ERROR: {
      const { error } = action
      return {
        ...state,
        loading: false,
        error,
      }
    }
    case POST_CARS_DATA:
      return {
        ...state,
        loading: true,
      }
    case POST_CARS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case POST_CARS_DATA_ERROR: {
      const { error } = action
      return {
        ...state,
        loading: false,
        error,
      }
    }
    case DELETE_CARS_DATA:
      return {
        ...state,
        loading: true,
      }
    case DELETE_CARS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case DELETE_CARS_DATA_ERROR: {
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
