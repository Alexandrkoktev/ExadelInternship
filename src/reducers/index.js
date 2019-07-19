import { combineReducers } from 'redux'
import userInfo from '../reducers/user'
import { connectRouter } from 'connected-react-router'
import rides from '../reducers/rides'

const rootReducer = history =>
  combineReducers({
    rides,
    userInfo,
    router: connectRouter(history),
  })
export default rootReducer
