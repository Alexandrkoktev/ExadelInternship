export const GET_PASSENGERS_DATA = 'GET_PASSENGERS_DATA'
export const GET_PASSENGERS_DATA_SUCCESS = 'GET_PASSENGERS_DATA_SUCCESS'
export const GET_PASSENGERS_DATA_ERROR = 'GET_PASSENGERS_DATA_ERROR'
export const SET_PASSENGER_RATING = 'SET_RATING'
export const SET_PASSENGER_RATING_SUCCESS = 'SET_RATING_SUCCESS'
export const SET_PASSENGER_RATING_ERROR = 'SET_RATING_ERROR'

export const POST_EDIT_DATE_DATA = 'POST_EDIT_DATE_DATA'
export const POST_EDIT_DATE_DATA_SUCCESS = 'POST_EDIT_DATE_DATA_SUCCESS'
export const POST_EDIT_DATE_DATA_ERROR = 'POST_EDIT_DATE_DATA_ERROR'

export function getPassengerStarting() {
  return {
    type: GET_PASSENGERS_DATA,
  }
}

export function getPassengerDone(userdata) {
  return {
    type: GET_PASSENGERS_DATA_SUCCESS,
    payload: userdata,
  }
}

export function getPassengerError(error) {
  return {
    type: GET_PASSENGERS_DATA_ERROR,
    error,
  }
}

export function setRatingStarting() {
  return {
    type: SET_PASSENGER_RATING,
  }
}

export function setRatingDone() {
  return {
    type: SET_PASSENGER_RATING_SUCCESS,
  }
}

export function setRatingError(error) {
  return {
    type: SET_PASSENGER_RATING_ERROR,
    error,
  }
}

// post
export function postEditDateStarting() {
  return {
    type: POST_EDIT_DATE_DATA,
  }
}

export function postEditDone() {
  return {
    type: POST_EDIT_DATE_DATA_SUCCESS,
  }
}

export function postEditDateError(error) {
  return {
    type: POST_EDIT_DATE_DATA_ERROR,
    error,
  }
}
