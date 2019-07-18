import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import createRootReducer from '../reducers/index'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  return createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history) // for dispatching history actions
      )
    )
  )
}