import {
  getActiveRidesDone,
  getActiveRidesError,
  getActiveRidesStarting,
  getRideDone,
  getRideStarting,
  getRideError,
  verifyingStarting,
  verifyingDone,
  verifyingError,
} from '../actions/activeRides'
import client from './axios'

export const mapStateToProps = state => ({
  activeRides: state.activeRides.activeRides,
  currentRide: state.currentRide.currentRide,
})

export const mapDispatchToProps = dispatch => ({
  getRides: (data) => dispatch(getRides(data)),
  getRide: id => dispatch(getRideInfo(id)),
  verifyPoints: data =>dispatch(verifyPoints(data)),
  createBooking: data =>dispatch(createBooking(data)),
})
export const createBooking=data=>{
  return async function(dispatch){
    try{
      dispatch(verifyingStarting())
      await client({
        url: '/api/createBooking',
        method: 'post',
        data: data,
      })
      dispatch(verifyingDone())
    }catch(e){
      dispatch(verifyingError(e))
    }
  }
}
export const verifyPoints= data=>{
  return async function(dispatch){
    try{
      dispatch(verifyingStarting())
      await client({
        url: '/api/bookingValid',
        method: 'post',
        data: data,
      })
      dispatch(verifyingDone())
    }catch(e){
      dispatch(verifyingError(e))
    }
  }
}
export const getRides = info => {
  return async function(dispatch) {
    try {
      dispatch(getActiveRidesStarting())
      const form ={ meetPoint: null, destinationPoint:null, datetime:null }
      const { data } = await client({
        url: '/api/searchRoutes',
        method: 'post',
        data:typeof info==='undefined'?form: info,
      })
      dispatch(getActiveRidesDone(data))
    } catch (e) {
      dispatch(getActiveRidesError(e))
    }
  }
}

export const getRideInfo = id => {
  return async function(dispatch) {
    try {
      dispatch(getRideStarting())
      const { data } = await client({
        url: '/api/route/'.concat(id),
        method: 'get',
      })
      dispatch(getRideDone(data))
    } catch (e) {
      dispatch(getRideError(e))
    }
  }
}
