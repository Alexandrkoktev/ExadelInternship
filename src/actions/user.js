// types
export const GET_USER_DATA = 'GET_USER_DATA'
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS'
export const GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR'
export const RESET_USER_DATA = 'RESET_USER_DATA'

// action handlers
export function getUserStarting() {
  return {
    type: GET_USER_DATA,
  }
}

export function getUserDone(userData) {
  return {
    type: GET_USER_DATA_SUCCESS,
    payload: userData,
  }
}

export function getUserError(error) {
  return {
    type: GET_USER_DATA_ERROR,
    error,
  }
}

export function resetUserData() {
  return {
    type: RESET_USER_DATA,
  }
}
