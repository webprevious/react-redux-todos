import { combineReducers } from 'redux'
import todos from './todos.js'
import test from './test.js'

export default combineReducers({
  todos,
  test
})