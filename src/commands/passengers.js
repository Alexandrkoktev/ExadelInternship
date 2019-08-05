import {
  getPassengerDone,
  getPassengerError,
  getPassengerStarting,
  setRatingDone,
  setRatingError,
  setRatingStarting,
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
      dispatch(getPassengerDone(data))
    } catch (e) {
      dispatch(getPassengerError(e))
    }
  }
}

export const ratePassenger = (id, rate) => {
  return async function(dispatch) {
    try {
      dispatch(setRatingStarting())
      await client({
        url: '/api/activeRoute/setRating',
        method: 'post',
        data: { id, rate },
      })
      dispatch(setRatingDone())
    } catch (e) {
      dispatch(setRatingError(e))
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
  ratePassenger: (id, rate) => dispatch(ratePassenger(id, rate)),
})
