export const GET_PASSENGERS_DATA = 'GET_PASSENGERS_DATA'
export const GET_PASSENGERS_DATA_SUCCESS = 'GET_PASSENGERS_DATA_SUCCESS'
export const GET_PASSENGERS_DATA_ERROR = 'GET_PASSENGERS_DATA_ERROR'

export function getPassengerStarting() {
  return {
    type: GET_PASSENGERS_DATA,
  }
}

export function getPassengerDone(userData) {
  return {
    type: GET_PASSENGERS_DATA_SUCCESS,
    payload: userData,
  }
}

export function getPassengerError(error) {
  return {
    type: GET_PASSENGERS_DATA_ERROR,
    error,
  }
}
