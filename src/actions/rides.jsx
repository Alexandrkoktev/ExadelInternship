export const GET_RIDES_DATA = 'GET_RIDES_DATA'
export const GET_RIDES_DATA_SUCCESS = 'GET_RIDES_DATA_SUCCESS'
export const GET_RIDES_DATA_ERROR = 'GET_RIDES_DATA_ERROR'

// action handlers
export function getRidesStarting() {
  return {
    type: GET_RIDES_DATA,
  }
}

export function getRidesDone(userData) {
  return {
    type: GET_RIDES_DATA_SUCCESS,
    payload: userData,
  }
}

export function getRidesError(error) {
  return {
    type: GET_RIDES_DATA_ERROR,
    error,
  }
}
