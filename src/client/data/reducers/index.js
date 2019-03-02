import { combineReducers } from 'redux'
import globalReducer from './global-reducer'

const allReducers = combineReducers({
  globalReducer: globalReducer
})

export default allReducers
