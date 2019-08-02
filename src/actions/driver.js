export const GET_DRIVER_NAME_DATA = 'GET_DRIVER_NAME_DATA'
export const GET_DRIVER_NAME_DATA_SUCCESS = 'GET_DRIVER_NAME_DATA_SUCCESS'
export const GET_DRIVER_NAME_DATA_ERROR = 'GET_DRIVER_NAME_DATA_ERROR'
export const GET_PHONE_NUMBER_DATA = 'GET_PHONE_NUMBER_DATA'
export const GET_PHONE_NUMBER_DATA_SUCCESS = 'GET_PHONE_NUMBER_DATA_SUCCESS'
export const GET_PHONE_NUMBER_DATA_ERROR = 'GET_PHONE_NUMBER_DATA_ERROR'

export function getDriverNameStarting() {
  return {
    type: GET_DRIVER_NAME_DATA,
  }
}

export function getDriverNameDone(userData) {

  return {
    type: GET_DRIVER_NAME_DATA_SUCCESS,
    payload: userData,
  }
}

export function getDriverNameError(error) {
  return {
    type: GET_DRIVER_NAME_DATA_ERROR,
    error,
  }
}

export function getPhoneNumberStarting() {
  return {
    type: GET_PHONE_NUMBER_DATA,
  }
}

export function getPhoneNumberDone(userData) {
  return {
    type: GET_PHONE_NUMBER_DATA_SUCCESS,
    payload: userData,
  }
}

export function getPhoneNumberError(error) {
  return {
    type: GET_PHONE_NUMBER_DATA_ERROR,
    error,
  }
}

