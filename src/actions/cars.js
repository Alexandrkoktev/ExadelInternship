// types
export const GET_CARS_DATA = 'GET_CARS_DATA'
export const GET_CARS_DATA_SUCCESS = 'GET_CARS_DATA_SUCCESS'
export const GET_CARS_DATA_ERROR = 'GET_CARS_DATA_ERROR'
export const PUT_CARS_DATA = 'PUT_CARS_DATA'
export const PUT_CARS_DATA_SUCCESS = 'PUT_CARS_DATA_SUCCESS'
export const PUT_CARS_DATA_ERROR = 'PUT_CARS_DATA_ERROR'
export const POST_CARS_DATA = 'POST_CARS_DATA'
export const POST_CARS_DATA_SUCCESS = 'POST_CARS_DATA_SUCCESS'
export const POST_CARS_DATA_ERROR = 'POST_CARS_DATA_ERROR'
export const DELETE_CARS_DATA = 'DELETE_CARS_DATA'
export const DELETE_CARS_DATA_SUCCESS = 'DELETE_CARS_DATA_SUCCESS'
export const DELETE_CARS_DATA_ERROR = 'DELETE_CARS_DATA_ERROR'

// action handlers
// get
export function getCarsStarting() {
  return {
    type: GET_CARS_DATA,
  }
}

export function getCarsDone(cars) {
  return {
    type: GET_CARS_DATA_SUCCESS,
    payload: cars,
  }
}

export function getCarsError(error) {
  return {
    type: GET_CARS_DATA_ERROR,
    error,
  }
}
// put
export function putCarStarting() {
  return {
    type: PUT_CARS_DATA,
  }
}

export function putCarDone() {
  return {
    type: PUT_CARS_DATA_SUCCESS,
  }
}

export function putCarError(error) {
  return {
    type: PUT_CARS_DATA_ERROR,
    error,
  }
}
// delete
export function deleteCarStarting() {
  return {
    type: DELETE_CARS_DATA,
  }
}

export function deleteCarDone() {
  return {
    type: DELETE_CARS_DATA_SUCCESS,
  }
}

export function deleteCarError(error) {
  return {
    type: DELETE_CARS_DATA_ERROR,
    error,
  }
}
// post
export function postCarStarting() {
  return {
    type: POST_CARS_DATA,
  }
}

export function postCarDone() {
  return {
    type: POST_CARS_DATA_SUCCESS,
  }
}

export function postCarError(error) {
  return {
    type: POST_CARS_DATA_ERROR,
    error,
  }
}
