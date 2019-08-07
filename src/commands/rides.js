import {
  getRidesDone,
  getFavouritesDone,
  getActiveRoutesDone,
  getActiveBookingsDone,
  getRoutesHistoryDone,
  getBookingsHistoryDone,
  getRidesError,
  getRidesStarting,
  createRouteStarting,
  createRouteDone,
  createRouteError,
  deleteRideStarting,
  deleteRideDone,
  deleteRideError,
  getFavouriteRouteStarting,
  getFavouriteRouteDone,
  getFavouriteRouteError
} from '../actions/rides'
import client from './axios'
import { push } from 'connected-react-router'

export const getRides = () => {
  return async function(dispatch) {
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

export const getFavouriteRoute = id => {
  return async function(dispatch) {
    try {
      dispatch(getFavouriteRouteStarting())
      const { data } = await client({
        url: `/api/favouriteRoute/${id}`,
        method: 'get',
      })
      dispatch(getFavouriteRouteDone(data))
    } catch (e) {
      dispatch(getFavouriteRouteError(e))
    }
  }
}

const getFavourites = () => {
  return async function(dispatch) {
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
  return async function(dispatch) {
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
  return async function(dispatch) {
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
  return async function(dispatch) {
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
  return async function(dispatch) {
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
export const createRoute = (data, info) => {
  return async function(dispatch) {
    try {
      dispatch(createRouteStarting())
      const route = await data
      await client({
        url: '/api/addRoute/',
        method: 'post',
        data: {
          timeAndDate: info.time.toJSON(),
          maxSeats: info.seats,
          carId: info.carId,
          favourite: false,
          favouriteRouteId: 0,
          routeURL: 0,
          ...route,
        },
      })
      dispatch(createRouteDone())
      dispatch(push('/home'))
    } catch (e) {
      dispatch(createRouteError(e))
    }
  }
}

const deleteRoute = id => {
  return async function(dispatch) {
    try {
      dispatch(deleteRideStarting())
      await client({
        url: '/api/deleteRoute',
        method: 'delete',
        data: JSON.stringify(id),
        headers: { 'Content-Type': 'application/json' },
      })
      dispatch(deleteRideDone())
    } catch (e) {
      dispatch(deleteRideError(e))
    }
  }
}

const deleteBooking = id => {
  return async function(dispatch) {
    try {
      dispatch(deleteRideStarting())
      await client({
        url: '/api/booking',
        method: 'delete',
        data: JSON.stringify(id),
        headers: { 'Content-Type': 'application/json' },
      })
      dispatch(deleteRideDone())
    } catch (e) {
      dispatch(deleteRideError(e))
    }
  }
}

export const mapStateToProps = state => ({
  rides: state.rides.rides,
  favourites: state.favourites.favourites,
  activeRoutes: state.activeRoutes.activeRoutes,
  activeBookings: state.activeBookings.activeBookings,
  routesHistory: state.routesHistory.routesHistory,
  bookingHistory: state.bookingHistory.bookingHistory,
  favouriteRoute: state.favouriteRoute.favouriteRoute,
})

export const mapDispatchToProps = dispatch => ({
  requestRides: () => dispatch(getRides()),
  getFavourites: () => dispatch(getFavourites()),
  getActiveRoutes: () => dispatch(getActiveRoutes()),
  getActiveBookings: () => dispatch(getActiveBookings()),
  getRoutesHistory: () => dispatch(getRoutesHistory()),
  getBookingsHistory: () => dispatch(getBookingsHistory()),
  createRoute: (data, info) => dispatch(createRoute(data, info)),
  deleteRoute: id => dispatch(deleteRoute(id)),
  deleteBooking: id => dispatch(deleteBooking(id)),
  getFavouriteRoute: id => dispatch(getFavouriteRoute(id)),
})
