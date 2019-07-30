import { combineReducers } from 'redux'
import userInfo from '../reducers/user'
import { connectRouter } from 'connected-react-router'
import rides from '../reducers/rides'
import home from '../reducers/home'
import passengers from '../reducers/passengers'
import cars from '../reducers/cars'
import notifications from '../reducers/notifications'
import statistics from '../reducers/statistics'

const rootReducer = history =>
  combineReducers({
    notifications,
    rides,
    userInfo,
    home,
    passengers,
    cars,
    statistics,
    router: connectRouter(history),
  })
export default rootReducer
