import {
  getDriverNameDone,
  getDriverNameStarting,
  getDriverNameError,
  getPhoneNumberDone,
  getPhoneNumberStarting,
  getPhoneNumberError,
} from '../actions/driver'
import client from './axios'

export const getDriver = id => {
  return async function(dispatch) {
    try {
      dispatch(getDriverNameStarting())
      dispatch(getPhoneNumberStarting())
      const { data } = await client({
        url: `/api/booking/${id}`,
        method: 'get',
      })
      dispatch(getDriverNameDone(data))
      dispatch(getPhoneNumberDone(data))
    } catch (e) {
      dispatch(getDriverNameError(e))
      dispatch(getPhoneNumberError(e))
    }
  }
}

export const mapStateToProps = state => ({
    driverName: state.driverName,
    phoneNumber: state.phoneNumber
  }
)

export const mapDispatchToProps = dispatch => ({
  requestDriver: id => dispatch(getDriver(id)),
})
