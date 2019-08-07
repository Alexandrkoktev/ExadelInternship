import {
  getPassengerDone,
  getPassengerError,
  getPassengerStarting, postEditDateError, postEditDateStarting, postEditDone,
  setRatingDone,
  setRatingError,
  setRatingStarting,
} from '../actions/passengers'
import {
  deleteRideStarting,
  deleteRideDone,
  deleteRideError,
} from '../actions/rides'
import client from './axios'
import { push } from 'connected-react-router'

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

export const editDateInRoute = (id, date) => {
  return async function(dispatch) {
    try {
      dispatch(postEditDateStarting())
      const { data } = await client({
        url: ``,
        method: 'post',
        data: { id, date },
      })
      dispatch(postEditDone())
    } catch (e) {
      dispatch(postEditDateError(e))
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

const deleteRoute = id => {
  return async function(dispatch) {
    try {
      dispatch(deleteRideStarting())
      await client({
        url: '/api/deleteRoute',
        method: 'delete',
        data: JSON.stringify(id),
        headers: { 'Content-Type': 'application/json' },
      })
      dispatch(deleteRideDone())
      dispatch(push('/routes'))
    } catch (e) {
      dispatch(deleteRideError(e))
    }
  }
}

export const mapStateToProps = state => ({
  passengers: state.passenger.passengers,
  freeSeats: state.passenger.freeSeats,
  maxSeats: state.passenger.maxSeats,
  startPointName: state.passenger.startPointName,
  finishPointName: state.passenger.finishPointName,
  startPoint: state.passenger.startPoint,
  finishPoint: state.passenger.finishPoint,
  viaPoints: state.passenger.viaPoints,
  timeAndDate: state.passenger.timeAndDate,
})

export const mapDispatchToProps = dispatch => ({
  requestPassengers: id => dispatch(getPassengers(id)),
  ratePassenger: (id, rate) => dispatch(ratePassenger(id, rate)),
  deleteRoute: id => dispatch(deleteRoute(id)),
})
