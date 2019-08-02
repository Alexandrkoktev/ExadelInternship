import { combineReducers } from 'redux'
import userInfo from '../reducers/user'
import { connectRouter } from 'connected-react-router'
// eslint-disable-next-line import/no-duplicates
import rides from '../reducers/rides'
// eslint-disable-next-line import/no-duplicates
import favourites from '../reducers/rides'
// eslint-disable-next-line import/no-duplicates
import activeRoutes from '../reducers/rides'
// eslint-disable-next-line import/no-duplicates
import activeBookings from '../reducers/rides'
// eslint-disable-next-line import/no-duplicates
import routesHistory from '../reducers/rides'
// eslint-disable-next-line import/no-duplicates
import bookingHistory from '../reducers/rides'
// eslint-disable-next-line import/no-duplicates
import currentRide from '../reducers/activeRides'
// eslint-disable-next-line import/no-duplicates
import activeRides from '../reducers/activeRides'
import home from '../reducers/home'
import passengers from '../reducers/passengers'
import cars from '../reducers/cars'
import notifications from '../reducers/notifications'
import statistics from '../reducers/statistics'
import driver from '../reducers/driver'

const rootReducer = history =>
  combineReducers({
    activeRides,
    currentRide,
    notifications,
    rides,
    favourites,
    activeRoutes,
    activeBookings,
    routesHistory,
    bookingHistory,
    userInfo,
    home,
    passengers,
    driver,
    cars,
    statistics,
    router: connectRouter(history),
  })
export default rootReducer
