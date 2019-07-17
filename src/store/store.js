import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userinfo from '../reducers/user'

const reducers = combineReducers({ userinfo })

export default createStore(reducers, applyMiddleware(thunk))
