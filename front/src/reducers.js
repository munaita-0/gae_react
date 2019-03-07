import { combineReducers } from 'redux'
import {
  // SELECT_SUBREDDIT,
  // INVALIDATE_SUBREDDIT,
  REQUEST_MEMOS,
  RECEIVE_MEMOS
} from './actions'

// function selectedSubreddit(state = 'reactjs', action) {
//   switch (action.type) {
//     case SELECT_SUBREDDIT:
//       return action.subreddit
//     default:
//       return state
//   }
// }

// function list_memos(
//   state = {
//     isFetching: false,
//     didInvalidate: false,
//     items: []
//   },
//   action
// ) {
//   switch (action.type) {
//     // case INVALIDATE_SUBREDDIT:
//     //   return Object.assign({}, state, {
//     //     didInvalidate: true
//     //   })
//     case REQUEST_POSTS:
//       return Object.assign({}, state, {
//         isFetching: false,
//         didInvalidate: false,
//         items: action.posts,
//         lastUpdated: action.reveivedAt
//       })
//     case RECEIVE_POSTS:
//       return Object.assign({}, state, {
//         isFetching: false,
//         didInvalidate: false,
//         items: action.posts,
//         lastUpdated: action.receivedAt
//       })
//     default:
//       return state
//   }
// }

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

const rootReducer = combineReducers({
  memos,
  isFetching
})

export default rootReducer
