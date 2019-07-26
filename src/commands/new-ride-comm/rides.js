import {
  getRidesDone,
  getRidesError,
  getRidesStarting,
} from '../../actions/rides'
import client from '../axios'

export const mapStateToProps = state => state.rides

export const mapDispatchToProps = dispatch => ({
  requestRides: () => dispatch(getRides()),
})
export const getRides = () => {
  // redux-thunk
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
