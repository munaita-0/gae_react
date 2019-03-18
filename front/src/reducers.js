import { combineReducers } from 'redux'
import {
  REQUEST_MEMOS,
  RECEIVE_MEMOS,
  RECEIVE_UPDATING_MEMO
} from './actions'

function memos(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MEMOS:
      return action.memos
    default:
      return state
  }
}

function isFetching(state = {}, action) {
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

const rootReducer = combineReducers({
  memos,
  isFetching,
  updatingMemo
})

export default rootReducer
