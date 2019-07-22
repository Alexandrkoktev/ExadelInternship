import {
  getRidesDone,
  getRidesError,
  getRidesStarting,
} from '../../actions/rides'
import { fakeRides } from './fakeRides'

export const mapStateToProps = state => ({
  rides: state.rides,
})

export const mapDispatchToProps = dispatch => ({
  requestRides: () => dispatch(getRides()),
})
export const getRides = () => {
  // redux-thunk
  return async function(dispatch) {
    try {
      dispatch(getRidesStarting())
      const ridesInfo = await fakeRides()
      dispatch(getRidesDone(ridesInfo))
    } catch (e) {
      dispatch(getRidesError(e))
    }
  }
}
