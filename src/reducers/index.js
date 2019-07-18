import { combineReducers } from 'redux'
import userinfo from '../reducers/user'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
  userinfo,
  router: connectRouter(history),
})
export default rootReducer