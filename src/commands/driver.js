import {
  getDriverDataDone,
  getDriverDataStarting,
  getDriverDataError,
} from '../actions/driver'
import {
  deleteRideStarting,
  deleteRideDone,
  deleteRideError,
} from '../actions/rides'
import {
  setRatingDone,
  setRatingError,
  setRatingStarting,
} from '../actions/passengers'
import client from './axios'
import { push } from 'connected-react-router'

export const getDriver = id => {
  return async function (dispatch) {
    try {
      dispatch(getDriverDataStarting())
      const { data } = await client({
        url: `/api/booking/${id}`,
        method: 'get',
      })
      dispatch(getDriverDataDone(data))
    } catch (e) {
      dispatch(getDriverDataError(e))
    }
  }
}

const deleteBooking = id => {
  return async function (dispatch) {
    try {
      dispatch(deleteRideStarting())
      await client({
        url: '/api/booking',
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

export const rateDriver = (id, rate) => {
  return async function (dispatch) {
    try {
      dispatch(setRatingStarting())
      await client({
        url: '/api/booking/setRating',
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
  driverName: state.driver.driverName,
  phoneNumber: state.driver.phoneNumber,
  carInformation: state.driver.carInformation,
  freeSeats: state.driver.freeSeats,
  maxSeats: state.driver.maxSeats,
  startPointName: state.driver.startPointName,
  finishPointName: state.driver.finishPointName,
  viaPoints: state.driver.viaPoints,
  meetPoint: state.driver.meetPoint,
  finishPoint: state.driver.finishPoint,
  startPoint: state.driver.startPoint,
  destinationPoint: state.driver.destinationPoint,
  enabled: state.driver.enabled,
  timeAndDate: state.driver.timeAndDate,
  driverRating: state.driver.driverRating,
  rating: state.driver.rating
})

export const mapDispatchToProps = dispatch => ({
  requestDriver: id => dispatch(getDriver(id)),
  deleteBooking: id => dispatch(deleteBooking(id)),
  rateDriver: (id, rate) => dispatch(rateDriver(id, rate))
})
