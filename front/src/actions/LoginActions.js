import {Configs} from '../config'
import {Cookie} from '../cookie'
import axios from 'axios'

// actionを返す責務
// dispatchなどはここでやる必要ない
// ここではなにが起こったかを記述するだけ
export function login(idpass) {
  return dispatch => {
    return axios.post(`${Configs.host}/auth/sign_in`, {
      email: idpass.email,
      password: idpass.password,
    }).then(response => {
      document.cookie = `uid=${response.headers.uid}`
      document.cookie = `client=${response.headers.client}`
      document.cookie = `access-token=${response.headers['access-token']}`
    }).catch(err => {
      // 例外処理
      throw err
    })
  }
}

export function logout() {
  return dispatch => {
    return axios.delete(
      `${Configs.host}/auth/sign_out`,
      Cookie.getHeaders()
    ).then(response => dispatch(function(e){
      Cookie.clear();
    })).catch(err => {
      throw err
      // 例外処理
    })
  }
}

export function loginStatus(bool) {
  if (bool) {
    return { type: 'LOGIN' }
  } else {
    return { type: 'LOGOUT' }
  }
}
