import {
  getHomeRidesDone,
  getHomeRidesError,
  getHomeRidesStarting,
} from '../actions/home-rides'
import client from './axios'

export const mapStateToProps = state => ({
  userInfo: state.userInfo,
  passengerRides: state.home.homeRides.passengerRides,
  driverRides: state.home.homeRides.driverRides,
})

export const mapDispatchToProps = dispatch => ({
  requestRides: () => dispatch(getHomeRides()),
})

export const getHomeRides = () => {
  // redux-thunk
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
