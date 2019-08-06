// types
export const GET_HOME_RIDES = '[HOME] GET_RIDES'
export const GET_HOME_RIDES_SUCCESS = 'GET_HOME_RIDES_SUCCESS'
export const GET_HOME_RIDES_ERROR = 'GET_HOME_RIDES_ERROR'
export const POST_FAVOURITE_ROUTE = 'POST_FAVOURITE_ROUTE'
export const POST_FAVOURITE_ROUTE_SUCCESS = 'POST_FAVOURITE_ROUTE_SUCCESS'
export const POST_FAVOURITE_ROUTE_ERROR = 'POST_FAVOURITE_ROUTE_ERROR'

// action handlers
export function getHomeRidesStarting() {
  return {
    type: GET_HOME_RIDES,
  }
}

export function getHomeRidesDone(rides) {
  return {
    type: GET_HOME_RIDES_SUCCESS,
    payload: rides,
  }
}

export function getHomeRidesError(error) {
  return {
    type: GET_HOME_RIDES_ERROR,
    error,
  }
}

export function getFavouritesStarting() {
  return {
    type: POST_FAVOURITE_ROUTE,
  }
}

export function getFavouritesDone() {
  return {
    type: POST_FAVOURITE_ROUTE_SUCCESS,
  }
}

export function getFavouritesError(error) {
  return {
    type: POST_FAVOURITE_ROUTE_ERROR,
    error,
  }
}
