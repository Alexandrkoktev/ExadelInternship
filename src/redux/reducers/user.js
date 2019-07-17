import { GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_ERROR, RESET_USER_DATA } from '../actions/user'

import immutable from 'utils/immutable-object'


const initialState = {
  lastName: '',
  firstName: '',
  role: '',
  email: '',
  loading: false,
  error: '',
}

function reducer(oldState = initialState, action) {
  const state = immutable(oldState)
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        loading: true,
      }
    case GET_USER_DATA_SUCCESS:
      const { lastName, firstName, role, email } = action.payload
      return {
        ...state,
        loading: false,
        lastName, firstName, role, email,
      }
    case GET_USER_DATA_ERROR:
      const { error } = action
      return {
        ...state,
        loading: false,
        error,
      }
    case RESET_USER_DATA:
      return { ...initialState }
    default:
      return state
  }
}

export default reducer
