import axios from 'axios'
import history from './components/History'

export const REQUEST_MEMOS = 'REQUEST_MEMOS'
export const RECEIVE_MEMOS = 'RECEIVE_MEMOS'

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

export function fetchMemos() {
  console.log('in fetchMemos')
  return dispatch => {
    dispatch(requestMemos())
    // return fetch(`http://localhost:3000/memos`)
    return axios.get(`https://suzuki-api-dot-spinapptest-151310.appspot.com/memos`)
      .then(response => dispatch(receiveMemos(response.data)))
  }
}

export function createMemo(memo) {
  console.log('in createMemos')
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

export function deleteMemo(id) {
  console.log('in deleteMemos')
  return dispatch => {
    dispatch(requestMemos())

    // return fetch(`http://localhost:3000/memos`)
    return axios.delete('https://suzuki-api-dot-spinapptest-151310.appspot.com/memos/' + id)
      .then(response => {
        dispatch(fetchMemos())
      })
  }
}
