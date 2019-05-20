import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

function memos(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_MEMOS':
      return action.memos
    default:
      return state
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case 'REQUEST_MEMOS':
      return true
    case 'RECEIVE_MEMOS':
      return false
    default:
      return state
  }
}

function updatingMemo(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_UPDATING_MEMO':
      return action.updatingMemo
    default:
      return state
  }
}

function users(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_USERS':
      return action.users
    default:
      return state
  }
}

function editingUser(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_EDITING_USER':
      return action.editingUser
    default:
      return state
  }
}

const rootReducer = combineReducers({
  memos,
  isFetching,
  updatingMemo,
  form: formReducer,
  users,
  editingUser
})

export default rootReducer
