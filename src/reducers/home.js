import {
    GET_HOME_RIDES,
    GET_HOME_RIDES_SUCCESS,
    GET_HOME_RIDES_ERROR,
  } from '../actions/home-rides'
  
  const initialState = {
    homeRides: {
      passengerRides: [],
      driverRides: []
    },
    loading: false,
    error: '',
  }
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_HOME_RIDES:
        return {
          ...state,
          loading: true,
        }
      case GET_HOME_RIDES_SUCCESS:
        const newState =  {
          ...state,
          loading: false,
          homeRides: {...action.payload}
        }
        return newState;
      case GET_HOME_RIDES_ERROR:
        const { error } = action
        return {
          ...state,
          loading: false,
          error,
        }
      default:
        return state
    }
  }
  
  export default reducer
  