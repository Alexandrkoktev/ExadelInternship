import {
  getRidesDone,
  getFavouritesDone,
  getActiveRoutesDone,
  getActiveBookingsDone,
  getRoutesHistoryDone,
  getBookingsHistoryDone,
  getRidesError,
  getRidesStarting,
} from '../actions/rides'
import client from './axios'



export const getRides = () => {
  return async function (dispatch) {
    try {
      dispatch(getRidesStarting())
      const { data } = await client({
        url: '/api/profile/favouriteroutes',
        method: 'get',
      })
      dispatch(getRidesDone(data))
    } catch (e) {
      dispatch(getRidesError(e))
    }
  }
}

const getFavourites = () => {
  return async function (dispatch) {
    try {
      dispatch(getRidesStarting())
      const { data } = await client({
        url: '/api/profile/favouriteroutes',
        method: 'get',
      })
      dispatch(getFavouritesDone(data))
    } catch (e) {
      dispatch(getRidesError(e))
    }
  }
}

const getActiveRoutes = () => {
  return async function (dispatch) {
    try {
      dispatch(getRidesStarting())
      const { data } = await client({
        url: '/api/activeRoutes',
        method: 'get',
      })
      dispatch(getActiveRoutesDone(data))
    } catch (e) {
      dispatch(getRidesError(e))
    }
  }
}

const getActiveBookings = () => {
  return async function (dispatch) {
    try {
      dispatch(getRidesStarting())
      const { data } = await client({
        url: '/api/bookings',
        method: 'get',
      })
      dispatch(getActiveBookingsDone(data))
    } catch (e) {
      dispatch(getRidesError(e))
    }
  }
}

const getRoutesHistory = () => {
  return async function (dispatch) {
    try {
      dispatch(getRidesStarting())
      const { data } = await client({
        url: '/api/activeRoutes/history',
        method: 'get',
      })
      dispatch(getRoutesHistoryDone(data))
    } catch (e) {
      dispatch(getRidesError(e))
    }
  }
}

const getBookingsHistory = () => {
  return async function (dispatch) {
    try {
      dispatch(getRidesStarting())
      const { data } = await client({
        url: '/api/bookings/history',
        method: 'get',
      })
      dispatch(getBookingsHistoryDone(data))
    } catch (e) {
      dispatch(getRidesError(e))
    }
  }
}

export const mapStateToProps = state => ({
  rides: state.rides.rides,
  favourites: state.favourites.favourites,
  activeRoutes: state.activeRoutes.activeRoutes,
  activeBookings: state.activeBookings.activeBookings,
  routesHistory: state.routesHistory.routesHistory,
  bookingHistory: state.bookingHistory.bookingHistory
})

export const mapDispatchToProps = dispatch => ({
  requestRides: () => dispatch(getRides()),
  getFavourites: () => dispatch(getFavourites()),
  getActiveRoutes: () => dispatch(getActiveRoutes()),
  getActiveBookings: () => dispatch(getActiveBookings()),
  getRoutesHistory: () => dispatch(getRoutesHistory()),
  getBookingsHistory: () => dispatch(getBookingsHistory())
})