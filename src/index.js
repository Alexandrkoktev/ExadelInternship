// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// eslint-disable-next-line no-unused-vars
import App from './App'
import * as serviceWorker from './serviceWorker'
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { ConnectedRouter } from 'connected-react-router'
// eslint-disable-next-line no-unused-vars
import configureStore, { history } from './store/store'

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)