// 参考: https://github.com/emanuelraj/vendor-crud-react-redux-medium-post
import {Configs} from '../config'
import {Cookie} from '../cookie'
import axios from 'axios'
import {memoService} from '../services/memoService'

export const RECEIVE_UPDATING_MEMO = 'RECEIVE_UPDATING_MEMO'

export const memoActions = {
  fetchListMemos,
  receiveMemos,
  deleteMemo,
  fetchMemo,
  updateMemo,
  createMemo
}

export function requestMemos() {
  return { type: 'REQUEST_MEMOS' }
}

export function receiveMemos(json) {
  return {
    type: 'RECEIVE_MEMOS',
    memos: json.map(v => {return v}),
  }
}

export function fetchListMemos() {
  return dispatch => {
    return memoService.get(`${Configs.host}/memos`)
      .then(response => dispatch(receiveMemos(response.data)))
      .catch((err) => { return err })
  }
}

export function deleteMemo(id) {
  return dispatch => {
    return memoService.destroy(`${Configs.host}/memos/${id}`)
      .then(response => { dispatch(fetchListMemos()) })
      .catch(err => { return err })
  }
}

export function receiveUpdatingMemo(json) {
  return {
    type: 'RECEIVE_UPDATING_MEMO',
    updatingMemo: json,
  }
}

export function fetchMemo(id) {
  return dispatch => {
    return memoService.get(`${Configs.host}/memos/${id}`)
      .then(response => dispatch(receiveUpdatingMemo(response.data)))
      .catch(err => { return err })
  }
}

export function updateMemo(id, memo) {
  return dispatch => {
    return memoService.update(
      `${Configs.host}/memos/${id}`,
      memo
    )
    .catch(err => { return err })
  }
}

export function createMemo(memo) {
  return dispatch => {
    return memoService.create(`${Configs.host}/memos`, {
      name: memo.name,
      description: memo.description
    }).catch(err => { return err })
  }
}
