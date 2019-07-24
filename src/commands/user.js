import {
  getUserDone,
  getUserError,
  getUserStarting,
  resetUserData,
} from '../actions/user'
import { push } from 'connected-react-router'
import client from './axios.js'

export const getUser = (email, password) => {
  return async function (dispatch) {
    try {
      dispatch(getUserStarting())
      const form = new FormData()
      form.append('j_username', email)
      form.append('j_password', password)
      await client({ url: '/api/login', method: 'post', data: form })
      const { data } = await client({ url: '/api/header', method: 'get' })
      dispatch(getUserDone({ username: data.name, role: data.role }))
      dispatch(push('/home'))
    } catch (error) {
      dispatch(getUserError(error))
    }
  }
}

export const restoreUser = () => {
  return async function (dispatch) {
    try {
      dispatch(getUserStarting())
      const { data } = await client({ url: '/api/home', method: 'get' })
      dispatch(getUserDone({ username: data.name, role: data.role }))
    } catch (error) {
      dispatch(push('/login'))
    }
  }
}

export const logOut = () => {
  return async function (dispatch) {
    await client({ url: '/api/logout', method: 'get' })
    dispatch(resetUserData())
    dispatch(push('/login'))
  }
}

export const mapStateToProps = state => ({
  userInfo: state.userInfo,
  error: state.userInfo.error,
  isError: !!state.userInfo.error,
})

export const mapDispatchToProps = dispatch => ({
  setUser: (email, password) => dispatch(getUser(email, password)),
})
