import { getUserDone, getUserError, getUserStarting,  resetUserData } from '../actions/user'
import { push } from 'connected-react-router'
import { fakeUser } from './fakeUser'

export const getUser = (email, password) => {
  return async function(dispatch) {
    try {
      dispatch(getUserStarting())
      const userInfo = await fakeUser(email, password)
      dispatch(getUserDone(userInfo))
      dispatch(push('/home'))
    } catch (e) {
      dispatch(getUserError(e))
    }
  }
}

export const logOut = () => {
  return async function(dispatch) {
    dispatch(resetUserData())
    dispatch(push('/'))
  }
}

export const mapStateToProps = state => ({
  userinfo: state.userinfo,
})

export const mapDispatchToProps = dispatch => ({
  setUser: (email, password) => dispatch(getUser(email, password)),
})