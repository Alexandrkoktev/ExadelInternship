export const GET_DRIVER_DATA = 'GET_DRIVER_DATA'
export const GET_DRIVER_DATA_SUCCESS = 'GET_DRIVER_DATA_SUCCESS'
export const GET_DRIVER_DATA_ERROR = 'GET_DRIVER_DATA_ERROR'

// action handlers
export function getDriverStarting() {
  return {
    type: GET_DRIVER_DATA,
  }
}

export function getDriverDone(userData) {
  return {
    type: GET_DRIVER_DATA_SUCCESS,
    payload: userData,
  }
}

export function getDriverError(error) {
  return {
    type: GET_DRIVER_DATA_ERROR,
    error,
  }
}
