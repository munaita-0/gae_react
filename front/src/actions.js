import fetch from 'cross-fetch'

export const REQUEST_MEMOS = 'REQUEST_MEMOS'
export const RECEIVE_MEMOS = 'RECEIVE_MEMOS'
// export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
// export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

// export function selectSubreddit(subreddit) {
//   return {
//     type: SELECT_SUBREDDIT,
//     subreddit
//   }
// }

// export function invalidateSubreddit(subreddit) {
//   return {
//     type: INVALIDATE_SUBREDDIT,
//     subreddit
//   }
// }

export function requestMemos() {
  console.log('in requestMemos')
  return { type: REQUEST_MEMOS }
}

export function receiveMemos(json) {
  console.log('======')
  console.log(json.map(v => {return v}))
  console.log('======')
  return {
    type: RECEIVE_MEMOS,
    memos: json.map(v => {return v}),
  }
}

export function fetchMemos() {
  console.log('in fetchMemos')
  return dispatch => {
    dispatch(requestMemos())
    // console.log(fetch(`http://localhost:3000/memos`))
    // return fetch(`http://localhost:3000/memos`)
    return fetch(`https://suzuki-api-dot-spinapptest-151310.appspot.com/memos`)
      .then(response => response.json())
      .then(json => dispatch(receiveMemos(json)))
  }
}

export function createMemo(memo) {
  console.log('in createMemos')
  return dispatch => {
    dispatch(requestMemos())
    // 1. POSTの処理書く

    // console.log(fetch(`http://localhost:3000/memos`))
    // return fetch(`http://localhost:3000/memos`)
    // return fetch(`https://suzuki-api-dot-spinapptest-151310.appspot.com/memos`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receiveMemos(json)))
  }
}

// function shouldFetchPosts(state, subreddit) {
//   console.log('8 shouldFetch')
//   const posts = state.postsBySubreddit[subreddit]
//   if (!posts) {
//     return true
//   } else if (posts.isFetching) {
//     return false
//   } else {
//     return posts.didInvalidate
//   }
// }
//
// export function fetchPostsIfNeeded(subreddit) {
//   console.log('7 fetchIf')
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState(), subreddit)) {
//       return dispatch(fetchPosts(subreddit))
//     }
//   }
// }
