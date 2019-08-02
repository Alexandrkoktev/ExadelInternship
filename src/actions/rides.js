export const GET_RIDES_DATA = 'GET_RIDES_DATA'
export const GET_RIDES_DATA_SUCCESS = 'GET_RIDES_DATA_SUCCESS'
export const GET_FAVOURITES_DATA_SUCCESS = 'GET_FAVOURITES_DATA_SUCCESS'
export const GET_ACTIVE_ROUTES_DATA_SUCCESS = 'GET_ACTIVE_ROUTES_DATA_SUCCESS'
export const GET_ACTIVE_BOOKINGS_DATA_SUCCESS =
  'GET_ACTIVE_BOOKINGS_DATA_SUCCESS'
export const GET_RIDES_DATA_ERROR = 'GET_RIDES_DATA_ERROR'
export const GET_ROUTES_HISTORY_SUCCESS = 'GET_ROUTES_HISTORY_SUCCESS'
export const GET_BOOKINGS_HISTORY_SUCCESS = 'GET_BOOKINGS_HISTORY_SUCCESS'
export const DELETE_RIDE = 'DELETE_RIDE'
export const DELETE_RIDE_SUCCESS = 'DELETE_RIDE_SUCCESS'
export const DELETE_RIDE_ERROR = 'DELETE_RIDE_ERROR'

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

export function getFavouritesDone(userData) {
  return {
    type: GET_FAVOURITES_DATA_SUCCESS,
    payload: userData,
  }
}

export function getActiveRoutesDone(userData) {
  return {
    type: GET_ACTIVE_ROUTES_DATA_SUCCESS,
    payload: userData,
  }
}

export function getActiveBookingsDone(userData) {
  return {
    type: GET_ACTIVE_BOOKINGS_DATA_SUCCESS,
    payload: userData,
  }
}

export function getRoutesHistoryDone(userData) {
  return {
    type: GET_ROUTES_HISTORY_SUCCESS,
    payload: userData,
  }
}

export function getBookingsHistoryDone(userData) {
  return {
    type: GET_BOOKINGS_HISTORY_SUCCESS,
    payload: userData,
  }
}

export function getRidesError(error) {
  return {
    type: GET_RIDES_DATA_ERROR,
    error,
  }
}

export function deleteRideStarting() {
  return {
    type: DELETE_RIDE,
  }
}

export function deleteRideDone() {
  return {
    type: DELETE_RIDE_SUCCESS,
  }
}

export function deleteRideError(error) {
  return {
    type: DELETE_RIDE_ERROR,
    error,
  }
}
