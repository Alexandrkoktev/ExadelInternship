export const GET_DRIVER_DATA = 'GET_DRIVER_DATA'
export const GET_DRIVER_DATA_SUCCESS = 'GET_DRIVER_DATA_SUCCESS'
export const GET_DRIVER_DATA_ERROR = 'GET_DRIVER_DATA_ERROR'

export function getDriverDataStarting() {
  return {
    type: GET_DRIVER_DATA,
  }
}

export function getDriverDataDone(userData) {
  return {
    type: GET_DRIVER_DATA_SUCCESS,
    payload: userData,
  }
}

export function getDriverDataError(error) {
  return {
    type: GET_DRIVER_DATA_ERROR,
    error,
  }
}
