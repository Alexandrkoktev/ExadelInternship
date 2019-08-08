import {
  GET_RIDES_DATA,
  GET_RIDES_DATA_SUCCESS,
  GET_FAVOURITES_DATA_SUCCESS,
  GET_ACTIVE_ROUTES_DATA_SUCCESS,
  GET_ACTIVE_BOOKINGS_DATA_SUCCESS,
  GET_RIDES_DATA_ERROR,
  GET_ROUTES_HISTORY_SUCCESS,
  GET_BOOKINGS_HISTORY_SUCCESS,
  DELETE_RIDE,
  DELETE_RIDE_SUCCESS,
  DELETE_RIDE_ERROR,
  GET_FAVOURITE_ROUTE_DATA,
  GET_FAVOURITE_ROUTE_SUCCESS,
  GET_FAVOURITE_ROUTE_ERROR
} from '../actions/rides'

const initialState = {
  rides: [],
  favourites: [],
  activeRoutes: [],
  activeBookings: [],
  routesHistory: [],
  bookingHistory: [],
  favouriteRoute: {},
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
    case DELETE_RIDE:
      return {
        ...state,
      }
    case DELETE_RIDE_SUCCESS:
      return {
        ...state,
      }
    case DELETE_RIDE_ERROR: {
      const { error } = action
      return {
        ...state,
        error,
      }
    }
    case GET_FAVOURITE_ROUTE_DATA:
      return {
        ...state,
      }
    case GET_FAVOURITE_ROUTE_SUCCESS:
      const favouriteRoute = action.payload
      return {
        ...state,
        favouriteRoute,
      }
    case GET_FAVOURITE_ROUTE_ERROR: {
      const { error } = action
      return {
        ...state,
        error,
      }
    }
    default:
      return state
  }
}

export default reducer
