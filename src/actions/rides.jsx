export const GET_RIDES_DATA = 'GET_RIDES_DATA'
export const GET_RIDES_DATA_SUCCESS = 'GET_RIDES_DATA_SUCCESS'
export const GET_FAVOURITES_DATA_SUCCESS = 'GET_FAVOURITES_DATA_SUCCESS'
export const GET_ACTIVE_ROUTES_DATA_SUCCESS = 'GET_ACTIVE_ROUTES_DATA_SUCCESS'
export const GET_ACTIVE_BOOKINGS_DATA_SUCCESS = 'GET_ACTIVE_BOOKINGS_DATA_SUCCESS'
export const GET_RIDES_DATA_ERROR = 'GET_RIDES_DATA_ERROR'
export const GET_ROUTES_HISTORY_SUCCESS = 'GET_ROUTES_HISTORY_SUCCESS'
export const GET_BOOKINGS_HISTORY_SUCCESS = 'GET_BOOKINGS_HISTORY_SUCCESS'


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
