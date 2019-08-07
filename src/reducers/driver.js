import {
  GET_DRIVER_DATA,
  GET_DRIVER_DATA_SUCCESS,
  GET_DRIVER_DATA_ERROR,
} from '../actions/driver'

const initialState = {
  driverName: '',
  driverRating: '',
phoneNumber: '',
  carInformation: '',
   maxSeats: '',
  freeSeats: '',
  startPointName: '',
  finishPointName: '',
  viaPoints: [],
  meetPoint: [],
  destinationPoint: [],
  startPoint: [],
  finishPoint: [],
  enabled: true,
  rating: ''
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVER_DATA:
      return {
        ...state,
      }
    case GET_DRIVER_DATA_SUCCESS:
      const {
        driverName,
        driverRating,
        phoneNumber,
        carInformation,
        freeSeats,
        maxSeats,
        startPointName,
        finishPointName,
        viaPoints,
        meetPoint,
        destinationPoint,
        startPoint,
        finishPoint,
        enabled,
        rating
      } = action.payload
      return {
        ...state,
        driverName,
        driverRating,
        phoneNumber,
        carInformation,
        maxSeats,
        freeSeats,
        startPointName,
        finishPointName,
        viaPoints,
        meetPoint,
        destinationPoint,
        startPoint,
        finishPoint,
        enabled,
        rating
      }
    case GET_DRIVER_DATA_ERROR:
      const { error } = action
      return {
        ...state,
        error,
      }
    default:
      return state
  }
}

export default reducer
