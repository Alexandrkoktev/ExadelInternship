import {
  getPassengerDone,
  getPassengerError,
  getPassengerStarting,
} from '../actions/passengers'
import client from './axios'

export const getPassengers = id => {
  return async function(dispatch) {
    try {
      dispatch(getPassengerStarting())
      const { data } = await client({
        url: `/api/activeRoute/${id}`,
        method: 'get',
      })
      debugger
      dispatch(getPassengerDone(data))
    } catch (e) {
      dispatch(getPassengerError(e))
    }
  }
}

export const mapStateToProps = state => state.passengers

export const mapDispatchToProps = dispatch => ({
  requestPassengers: id => dispatch(getPassengers(id)),
})
