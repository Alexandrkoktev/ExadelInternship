// types
export const GET_HOME_RIDES = '[HOME] GET_RIDES'
export const GET_HOME_RIDES_SUCCESS = 'GET_HOME_RIDES_SUCCESS'
export const GET_HOME_RIDES_ERROR = 'GET_HOME_RIDES_ERROR'

// action handlers
export function getHomeRidesStarting() {
  return {
    type: GET_HOME_RIDES
  }
}

export function getHomeRidesDone(rides) {
  return {
    type: GET_HOME_RIDES_SUCCESS,
    payload: rides
  }
}

export function getHomeRidesError(error) {
  return {
    type: GET_HOME_RIDES_ERROR,
    error
  }
}