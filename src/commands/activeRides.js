import {
  getActiveRidesDone,
  getActiveRidesError,
  getActiveRidesStarting,
} from '../actions/activeRides'
import client from './axios'

export const mapStateToProps = state => state.activeRides

export const mapDispatchToProps = dispatch => ({
  getRides: () => dispatch(getRides()),
})
export const getRides = () => {
  // redux-thunk
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
