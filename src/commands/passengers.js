import {
  getPassengerDone,
  getPassengerError,
  getPassengerStarting,
} from '../actions/passengers'
import client from './axios'

export const getPassengers = id => {
  return async function(dispatch) {
    try {
      debugger
      dispatch(getPassengerStarting())
      const { data } = await client({
        url: `/api/activeRoute/${id}`,
        method: 'get',
      })
      dispatch(getPassengerDone(data))
    } catch (e) {
      dispatch(getPassengerError(e))
    }
  }
}

export const mapStateToProps = state => ({
  passengers: state.passenger.passengers,
  freeSeats: state.passenger.freeSeats,
  maxSeats: state.passenger.maxSeats,
  startPointName: state.passenger.startPointName,
  finishPointName: state.passenger.finishPointName,
})

export const mapDispatchToProps = dispatch => ({
  requestPassengers: id => dispatch(getPassengers(id)),
})
