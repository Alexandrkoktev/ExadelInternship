import {
  getDriverDone,
  getDriverError,
  getDriverStarting,
} from '../../actions/driver'
import { fakeDriver } from './fakeDriver'

export const getDriver = () => {
  return async function(dispatch) {
    try {
      dispatch(getDriverStarting())
      const driverInfo = await fakeDriver()
      dispatch(getDriverDone(driverInfo))
    } catch (e) {
      dispatch(getDriverError(e))
    }
  }
}

export const mapStateToProps = state => state.driver

export const mapDispatchToProps = dispatch => ({
  requestDriver: () => dispatch(getDriver()),
})
