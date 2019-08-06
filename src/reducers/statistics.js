import {
  GET_STATISTICS,
  GET_STATISTICS_SUCCESS,
  GET_STATISTICS_ERROR,
} from '../actions/statistics'

const initialState = {
  statistics: [],
  mode: 0,
  order: true,
  name: ""
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_STATISTICS:
      return {
        ...state,
      }
    case GET_STATISTICS_SUCCESS:
      const statistics = action.payload
      return {
        ...state,
        statistics,
      }
    case GET_STATISTICS_ERROR:
      const { error } = action
      return {
        ...state,
        error,
      }
    default:
      return state
  }
}

export default reducer
