import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userinfo from '../reducers/user'
import home from '../reducers/home'

const reducers = combineReducers({ userinfo, home })

export default createStore(reducers, applyMiddleware(thunk))
