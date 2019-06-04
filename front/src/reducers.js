import { combineReducers } from 'redux'

function login(state = false, action) {
  switch (action.type) {
    case 'LOGIN':
      return true
    case 'LOGOUT':
      return false
    default:
      return state
  }
}

const rootReducer = combineReducers({
  login
})

export default rootReducer
