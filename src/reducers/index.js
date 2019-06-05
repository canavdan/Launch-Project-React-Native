import { combineReducers } from 'redux'
import authReducer from './authReducer'
import launchReduer from './launchReducer'

export default combineReducers({
  auth: authReducer,
  launch: launchReduer
})
