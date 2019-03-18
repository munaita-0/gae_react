import axios from 'axios'

export const REQUEST_MEMOS = 'REQUEST_MEMOS'
export const RECEIVE_MEMOS = 'RECEIVE_MEMOS'
export const RECEIVE_UPDATING_MEMO = 'RECEIVE_UPDATING_MEMO'

export function requestMemos() {
  console.log('in requestMemos')
  return { type: REQUEST_MEMOS }
}

export function receiveMemos(json) {
  return {
    type: RECEIVE_MEMOS,
    memos: json.map(v => {return v}),
  }
}

export function receiveUpdatingMemo(json) {
  return {
    type: RECEIVE_UPDATING_MEMO,
    updatingMemo: json,
  }
}

export function fetchMemo(id) {
  return dispatch => {
    dispatch(requestMemos())
    // return fetch(`http://localhost:3000/memos`)
    return axios.get(`https://suzuki-api-dot-spinapptest-151310.appspot.com/memos/${id}`)
      .then(response => dispatch(receiveUpdatingMemo(response.data)))
  }
}

export function fetchListMemos() {
  return dispatch => {
    dispatch(requestMemos())
    // return fetch(`http://localhost:3000/memos`)
    return axios.get(`https://suzuki-api-dot-spinapptest-151310.appspot.com/memos`)
      .then(response => dispatch(receiveMemos(response.data)))
  }
}

export function createMemo(memo) {
  return dispatch => {
    dispatch(requestMemos())

    // return fetch(`http://localhost:3000/memos`)
    return axios.post(`https://suzuki-api-dot-spinapptest-151310.appspot.com/memos`, {
      name: memo.name,
      description: memo.description
    }).then(response => {
      console.log('ddddd')
    })
  }
}

export function updateMemo(id, memo) {
  return dispatch => {
    dispatch(requestMemos())

    // return fetch(`http://localhost:3000/memos`)
    return axios.put(`https://suzuki-api-dot-spinapptest-151310.appspot.com/memos/${id}`, {
      name: memo.name,
      description: memo.description
    }).then(response => {
      console.log('ddddd')
    })
  }
}

export function deleteMemo(id) {
  console.log('in deleteMemos')
  return dispatch => {
    dispatch(requestMemos())

    // return fetch(`http://localhost:3000/memos`)
    return axios.delete(`https://suzuki-api-dot-spinapptest-151310.appspot.com/memos/${id}`)
      .then(response => {
        dispatch(fetchListMemos())
      })
  }
}
