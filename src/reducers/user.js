import {
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  RESET_USER_DATA,
} from '../actions/user'

const initialState = {
  username: '',
  role: '',
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
      const { username, role } = action.payload
      return {
        ...state,
        loading: false,
        error: '',
        username,
        role
      }
    case GET_USER_DATA_ERROR:
      const { error: { message } } = action
      return {
        ...state,
        loading: false,
        error: message
      }
    case RESET_USER_DATA:
      return { ...initialState }
    default:
      return state
  }
}

export default reducer
