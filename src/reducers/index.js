import { combineReducers } from 'redux'
import userinfo from '../reducers/user'
import { connectRouter } from 'connected-react-router'
import rides from '../reducers/rides'
import home from '../reducers/home'

const rootReducer = history =>
  combineReducers({
    rides,
    userinfo,
    home,
    router: connectRouter(history),
  })
export default rootReducer
