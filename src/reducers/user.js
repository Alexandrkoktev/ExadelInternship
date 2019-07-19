import {
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  RESET_USER_DATA,
} from '../actions/user'

const initialState = {
  lastName: '',
  firstName: 'Polza',
  role: '',
  email: '',
  loading: false,
  error: '',
}

function reducer(state = initialState, action) {
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
        lastName,
        firstName,
        role,
        email,
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