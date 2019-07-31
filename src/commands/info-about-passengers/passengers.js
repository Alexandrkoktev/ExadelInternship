import {
  getPassengerDone,
  getPassengerError,
  getPassengerStarting,
} from '../../actions/passengers'
import { fakePassengers } from './fakePassengers'

export const mapStateToProps = state => state.passengers

export const mapDispatchToProps = dispatch => ({
  requestPassengers: () => dispatch(getPassengers()),
})
export const getPassengers = () => {
  return async function(dispatch) {
    try {
      dispatch(getPassengerStarting())
      const passengersInfo = await fakePassengers()
      dispatch(getPassengerDone(passengersInfo))
    } catch (e) {
      dispatch(getPassengerError(e))
    }
  }
}
