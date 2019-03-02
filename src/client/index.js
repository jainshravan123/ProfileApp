import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Routes from './routes.js'
import allRedcuers from './data/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(allRedcuers)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('root'))
