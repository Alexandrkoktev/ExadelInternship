import {
  getDriverDone,
  getDriverError,
  getDriverStarting,
} from '../actions/driver'
import client from './axios'

export const getDriver = (id) => {
  return async function(dispatch) {
    try {
      dispatch(getDriverStarting())
      const { data } = await client({
        url: '/api/booking/${id}',
        method: 'get',
      })
      dispatch(getDriverDone(data))
    } catch (e) {
      dispatch(getDriverError(e))
    }
  }
}

export const mapStateToProps = state => state.driver

export const mapDispatchToProps = dispatch => ({
  requestDriver: (id) => dispatch(getDriver(id)),
})
