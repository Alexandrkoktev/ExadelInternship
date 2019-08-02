import {
  getActiveRidesDone,
  getActiveRidesError,
  getActiveRidesStarting,
  getRideDone,
  getRideStarting,
  getRideError,
} from '../actions/activeRides'
import client from './axios'

export const mapStateToProps = state => ({
  activeRides: state.activeRides.activeRides,
  currentRide: state.currentRide.currentRide,
})

export const mapDispatchToProps = dispatch => ({
  getRides: () => dispatch(getRides()),
  getRide: id => dispatch(getRideInfo(id)),
})

export const getRides = () => {
  return async function(dispatch) {
    try {
      dispatch(getActiveRidesStarting())
      const form = { meetPoint: null, destinationPoint: null, datetime: null }
      const { data } = await client({
        url: '/api/searchRoutes',
        method: 'post',
        data: form,
      })
      dispatch(getActiveRidesDone(data))
    } catch (e) {
      dispatch(getActiveRidesError(e))
    }
  }
}

export const getRideInfo = id => {
  return async function(dispatch) {
    try {
      dispatch(getRideStarting())
      const { data } = await client({
        url: '/api/route/'.concat(id),
        method: 'get',
      })
      dispatch(getRideDone(data))
    } catch (e) {
      dispatch(getRideError(e))
    }
  }
}
