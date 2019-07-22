import {
  getPassengerDone,
  getPassengerError,
  getPassengerStarting,
} from '../../actions/passengers'
import { fakePassengers } from './fakePassengers'

export const mapStateToProps = state => ({
  passengers: state.passengers,
})

export const mapDispatchToProps = dispatch => ({
  requestPassengers: () => dispatch(getPassengers()),
})
export const getPassengers = () => {
  // redux-thunk
  return async function(dispatch) {
    try {
      dispatch(getPassengerStarting())
      const passengersInfo = await fakePassengers()
      console.log(passengersInfo)
      dispatch(getPassengerDone(passengersInfo))
    } catch (e) {
      dispatch( getPassengerError(e))
    }
  }
}
