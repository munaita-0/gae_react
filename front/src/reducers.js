import { combineReducers } from 'redux'
import {
  REQUEST_MEMOS,
  RECEIVE_MEMOS,
  RECEIVE_UPDATING_MEMO,
  RECEIVE_LOGIN
} from './actions'
import { reducer as formReducer } from 'redux-form'

function memos(state = [], action) {
  switch (action.type) {
    case RECEIVE_MEMOS:
      return action.memos
    default:
      return state
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case REQUEST_MEMOS:
      return true
    case RECEIVE_MEMOS:
      return false
    default:
      return state
  }
}

function updatingMemo(state = {}, action) {
  switch (action.type) {
    case RECEIVE_UPDATING_MEMO:
      return action.updatingMemo
    default:
      return state
  }
}

function auth(state = {}, action) {
  switch (action.type) {
    case RECEIVE_LOGIN:
      document.cookie = `uid=${action.auth.uid}`
      document.cookie = `client=${action.auth.client}`
      document.cookie = `access-token=${action.auth['access-token']}`
      return action.auth
    default:
      return state
  }
}

const rootReducer = combineReducers({
  memos,
  isFetching,
  updatingMemo,
  auth,
  form: formReducer
})

export default rootReducer
