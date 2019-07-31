import {
  getPassengerDone,
  getPassengerError,
  getPassengerStarting,
} from '../../actions/passengers'
import client from '../axios'

export const getPassengers = (id) => {
  return async function(dispatch) {
    try {
      dispatch(getPassengerStarting())
      debugger
      const  {data} = await client({
        url: '/api/activeRoute/'.concat(id),
        method: 'get',
      })
      dispatch(getPassengerDone(data))
    } catch (e) {
      dispatch(getPassengerError(e))
    }
  }
}

export const mapStateToProps = state => state.passengers

export const mapDispatchToProps = dispatch => ({
  requestPassengers: (id) => dispatch(getPassengers(id)),
})
