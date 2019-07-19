import { combineReducers } from 'redux'
import userinfo from '../reducers/user'
import { connectRouter } from 'connected-react-router'
import rides from '../reducers/rides'

const rootReducer = history =>
  combineReducers({
    rides,
    userinfo,
    router: connectRouter(history),
  })
export default rootReducer
