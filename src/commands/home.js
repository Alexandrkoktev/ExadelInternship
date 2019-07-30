import {
  getHomeRidesDone,
  getHomeRidesError,
  getHomeRidesStarting,
} from '../actions/home-rides'
import { fakeHomeRides } from './fakeHomeRides'

export const mapStateToProps = state => ({
  passengerRides: state.home.homeRides.passengerRides,
  driverRides: state.home.homeRides.passengerRides,
})

export const mapDispatchToProps = dispatch => ({
  requestRides: () => dispatch(getHomeRides()),
})

export const getHomeRides = () => {
  // redux-thunk
  return async function(dispatch) {
    try {
      dispatch(getHomeRidesStarting())
      const homerides = await fakeHomeRides()
      dispatch(getHomeRidesDone(homerides))
    } catch (e) {
      dispatch(getHomeRidesError(e))
    }
  }
}
