import {
  GET_RIDES_DATA,
  GET_RIDES_DATA_SUCCESS,
  GET_FAVOURITES_DATA_SUCCESS,
  GET_ACTIVE_ROUTES_DATA_SUCCESS,
  GET_ACTIVE_BOOKINGS_DATA_SUCCESS,
  GET_RIDES_DATA_ERROR,
  GET_ROUTES_HISTORY_SUCCESS,
  GET_BOOKINGS_HISTORY_SUCCESS,
} from '../actions/rides'

const initialState = {
  rides: [],
  favourites: [],
  activeRoutes: [],
  activeBookings: [],
  routesHistory: [],
  bookingHistory: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_RIDES_DATA:
      return {
        ...state,
      }
    case GET_RIDES_DATA_SUCCESS:
      const rides = action.payload
      return {
        ...state,
        rides,
      }
    case GET_FAVOURITES_DATA_SUCCESS:
      const favourites = action.payload
      return {
        ...state,
        favourites,
      }
    case GET_ACTIVE_ROUTES_DATA_SUCCESS:
      const activeRoutes = action.payload
      return {
        ...state,
        activeRoutes,
      }
    case GET_ACTIVE_BOOKINGS_DATA_SUCCESS:
      const activeBookings = action.payload
      return {
        ...state,
        activeBookings,
      }
    case GET_ROUTES_HISTORY_SUCCESS:
      const routesHistory = action.payload
      return {
        ...state,
        routesHistory,
      }
    case GET_BOOKINGS_HISTORY_SUCCESS:
      const bookingHistory = action.payload
      return {
        ...state,
        bookingHistory,
      }
    case GET_RIDES_DATA_ERROR:
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
