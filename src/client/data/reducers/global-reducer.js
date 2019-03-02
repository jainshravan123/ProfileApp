import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function globalReducer (state = initialState, action) {
  switch (action.type) {
    case types.PROFILE_ACTION:
      return {
        state,
        loggedIn: true
      }
    default:
      return state
  }
}
