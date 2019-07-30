import { combineReducers } from 'redux'
import userInfo from '../reducers/user'
import { connectRouter } from 'connected-react-router'
import rides from '../reducers/rides'
import home from '../reducers/home'
import passengers from '../reducers/passengers'
import cars from '../reducers/cars'
import notifications from '../reducers/notifications'
import activeRides from '../reducers/activeRides'

const rootReducer = history =>
  combineReducers({
    activeRides,
    notifications,
    rides,
    userInfo,
    home,
    passengers,
    cars,
    router: connectRouter(history),
  })
export default rootReducer
