export const GET_ACTIVE_RIDES_DATA = 'GET_ACTIVE_RIDES_DATA'
export const GET_ACTIVE_RIDES_DATA_SUCCESS = 'GET_ACTIVE_RIDES_DATA_SUCCESS'
export const GET_ACTIVE_RIDES_DATA_ERROR = 'GET_ACTIVE_RIDES_DATA_ERROR'

// action handlers
export function getActiveRidesStarting() {
  return {
    type: GET_ACTIVE_RIDES_DATA,
  }
}

export function getActiveRidesDone(userData) {
  return {
    type: GET_ACTIVE_RIDES_DATA_SUCCESS,
    payload: userData,
  }
}

export function getActiveRidesError(error) {
  return {
    type: GET_ACTIVE_RIDES_DATA_ERROR,
    error,
  }
}
