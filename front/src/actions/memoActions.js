// 参考: https://github.com/emanuelraj/vendor-crud-react-redux-medium-post
import {Configs} from '../config'
import {Cookie} from '../cookie'
import axios from 'axios'

export const memoActions = {
  fetchListMemos,
  receiveMemos,
  deleteMemo,
  fetchMemo,
  updateMemo,
  createMemo
}

export function receiveMemos(json) {
  return {
    type: 'RECEIVE_MEMOS',
    memos: json.map(v => {return v}),
  }
}

export function fetchListMemos() {
  return dispatch => {
    return axios.get(`${Configs.host}/memos`, Cookie.getHeaders())
      .then(response => dispatch(receiveMemos(response.data)))
      .catch((err) => {
        console.log("Error in response");
        console.log(err.response.status);
        throw err;
      })
  }
}

export function deleteMemo(id) {
  return dispatch => {
    return axios.delete(`${Configs.host}/memos/${id}`, Cookie.getHeaders())
      .then(response => { dispatch(fetchListMemos()) })
      .catch((err) => {
        console.log("Error in response");
        console.log(err.response.status);
        throw err;
      })
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
    return axios.get(`${Configs.host}/memos/${id}`, Cookie.getHeaders())
      .then(response => dispatch(receiveUpdatingMemo(response.data)))
      .catch((err) => {
        console.log("Error in response");
        console.log(err.response.status);
        throw err;
      })
  }
}

export function updateMemo(id, memo) {
  return dispatch => {
    return axios.put(
      `${Configs.host}/memos/${id}`,
      memo,
      Cookie.getHeaders()
    ).catch((err) => {
      console.log("Error in response");
      console.log(err.response.status);
      throw err;
    })
  }
}

export function createMemo(memo) {
  return dispatch => {
    return axios.post(
      `${Configs.host}/memos`,
      {
        name: memo.name,
        description: memo.description
      },
      Cookie.getHeaders()
    ).catch((err) => {
      console.log("Error in response");
      console.log(err.response.status);
      throw err;
    })
  }
}
