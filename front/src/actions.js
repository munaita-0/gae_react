import axios from 'axios'
import {Configs} from './config'

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
    return axios.get(`${Configs.host}/memos/${id}`)
      .then(response => dispatch(receiveUpdatingMemo(response.data)))
  }
}

export function fetchListMemos() {
  return dispatch => {
    dispatch(requestMemos())
    return axios.get(`${Configs.host}/memos`)
      .then(response => dispatch(receiveMemos(response.data)))
  }
}

export function createMemo(memo) {
  return dispatch => {
    dispatch(requestMemos())

    return axios.post(`${Configs.host}/memos`, {
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

    return axios.put(`${Configs.host}/memos/${id}`, {
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

    return axios.delete(`${Configs.host}/memos/${id}`)
      .then(response => {
        dispatch(fetchListMemos())
      })
  }
}
