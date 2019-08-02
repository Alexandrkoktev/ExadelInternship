export const GET_ACTIVE_RIDES_DATA = 'GET_ACTIVE_RIDES_DATA'
export const GET_ACTIVE_RIDES_DATA_SUCCESS = 'GET_ACTIVE_RIDES_DATA_SUCCESS'
export const GET_ACTIVE_RIDES_DATA_ERROR = 'GET_ACTIVE_RIDES_DATA_ERROR'
export const GET_RIDE_DATA = 'GET_RIDE_DATA'
export const GET_RIDE_DATA_SUCCESS = 'GET_RIDE_DATA_SUCCESS'
export const GET_RIDE_DATA_ERROR = 'GET_RIDE_DATA_ERROR'

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

export function getRideStarting() {
  return {
    type: GET_RIDE_DATA,
  }
}

export function getRideDone(userData) {
  return {
    type: GET_RIDE_DATA_SUCCESS,
    payload: userData,
  }
}

export function getRideError(error) {
  return {
    type: GET_RIDE_DATA_ERROR,
    error,
  }
}
