//types
export const GET_CARS_DATA = 'GET_CARS_DATA'
export const GET_CARS_DATA_SUCCESS = 'GET_CARS_DATA_SUCCESS'
export const GET_CARS_DATA_ERROR = 'GET_CARS_DATA_ERROR'

// action handlers

export function getCarsStarting() {
  return {
    type: GET_CARS_DATA,
  }
}

export function getCarsDone(cars) {
  return {
    type: GET_CARS_DATA_SUCCESS,
    payload: cars,
  }
}

export function getCarsError(error) {
  return {
    type: GET_CARS_DATA_ERROR,
    error,
  }
}
