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
  checked: false,
  error: '',
  photoUrl: '',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        loading: true,
        checked: true,
      }
    case GET_USER_DATA_SUCCESS:
      const { username, role, photoUrl } = action.payload
      return {
        ...state,
        loading: false,
        checked: true,
        error: '',
        username,
        role,
        photoUrl,
      }
    case GET_USER_DATA_ERROR:
      const {
        error: { message },
      } = action
      return {
        ...state,
        loading: false,
        checked: false,
        error: message,
      }
    case RESET_USER_DATA:
      return { ...initialState }
    default:
      return state
  }
}

export default reducer
