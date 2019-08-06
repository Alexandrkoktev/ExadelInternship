import {
  getHomeRidesDone,
  getHomeRidesError,
  getHomeRidesStarting,
  getFavouritesDone,
  getFavouritesStarting,
  getFavouritesError,
} from '../actions/home-rides'
import client from './axios'

export const getHomeRides = () => {
  return async function(dispatch) {
    try {
      dispatch(getHomeRidesStarting())
      const {
        data: { activeRoutes, bookings },
      } = await client({ url: '/api/home', method: 'get' })
      const homeRides = { driverRides: activeRoutes, passengerRides: bookings }
      dispatch(getHomeRidesDone(homeRides))
    } catch (e) {
      dispatch(getHomeRidesError(e))
    }
  }
}

export const addToFavourites = (routeId, name) => {
  return async function(dispatch) {
    try {
      dispatch(getFavouritesStarting())
      await client({
        url: '/api/favouriteRoute',
        method: 'post',
        data: { routeId, name },
      })
      dispatch(getFavouritesDone())
    } catch (e) {
      dispatch(getFavouritesError(e))
    }
  }
}

export const deleteFromFavs = id => {
  return async function(dispatch) {
    try {
      dispatch(getFavouritesStarting())
      await client({
        url: `/api/favouriteRoute/${id}`,
        method: 'delete',
      })
      dispatch(getFavouritesDone())
    } catch (e) {
      dispatch(getFavouritesError(e))
    }
  }
}

export const mapStateToProps = state => ({
  userInfo: state.userInfo,
  passengerRides: state.home.homeRides.passengerRides,
  driverRides: state.home.homeRides.driverRides,
})

export const mapDispatchToProps = dispatch => ({
  requestRides: () => dispatch(getHomeRides()),
  addFavourite: (id, name) => dispatch(addToFavourites(id, name)),
  deleteFavourite: id => dispatch(deleteFromFavs(id)),
})
