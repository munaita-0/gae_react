import {Configs} from '../config'
import {Cookie} from '../cookie'
import axios from 'axios'

export const REQUEST_USER = 'REQUEST_MEMOS'
export const RECEIVE_USER = 'RECEIVE_MEMOS'
export const RECEIVE_EDITING_USER = 'RECEIVE_EDITING_USER'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT'

export const userActions = {
  RECEIVE_LOGIN,
  REQUEST_LOGIN
}

export function requestUser() {
  return { type: REQUEST_USER }
}

export function receiveEditingUser(json) {
  return {
    type: RECEIVE_EDITING_USER,
    updatingMemo: json,
  }
}

export function fetchUser(auth) {
  return dispatch => {
    dispatch(requestUser())
    return axios.get(
      `${Configs.host}/auth/edit`,
      { headers: auth }
    ).then(response => dispatch(receiveEditingUser(response.data)))
  }
}

export function createUser(user) {
  return dispatch => {
    dispatch(requestUser())

    return axios.post(`${Configs.host}/auth`, {
      name: user.name,
      email: user.email,
      password: user.password,
    }).then(response => {
      console.log('eeeee')
    })
  }
}

export function editUser(user, auth) {
  return dispatch => {
    dispatch(requestUser())

    // TODO cookie -> headerはメソッド化する
    const cookie = Cookie()

    return axios.put(`${Configs.host}/auth`, {
      name: user.name,
      password: user.password,
      password_confirmation: user.password
    }, {
      headers: {
        uid: cookie['uid'],
        client: cookie['client'],
        'access-token': cookie['access-token'],
      }
    }).then(response => {
      console.log('ddddd')
    })
  }
}

export function requestLogin() {
  return { type: REQUEST_LOGIN }
}

export function receiveLogin(json) {
  return {
    type: RECEIVE_LOGIN,
    auth: json,
  }
}

export function login(idpass) {
  return dispatch => {
    dispatch(requestLogin())

    return axios.post(`${Configs.host}/auth/sign_in`, {
      email: idpass.email,
      password: idpass.password,
    }).then(response => dispatch(receiveLogin(response.headers)))
  }
}

export function requestLogout() {
  return { type: REQUEST_LOGOUT }
}

export function receiveLogout(json) {
  return {
    type: RECEIVE_LOGOUT,
    auth: json,
  }
}

export function logout(idpass) {
  return dispatch => {
    dispatch(requestLogout())

    const cookie = Cookie()

    return axios.delete(
      `${Configs.host}/auth/sign_out`, 
      {
        headers: {
          uid: cookie['uid'],
          client: cookie['client'],
          'access-token': cookie['access-token'],
        }
      }
    ).then(response => dispatch(function(e){
      document.cookie = `uid=`
      document.cookie = `client=`
      document.cookie = `access-token=`
      console.log(e)
    }))
  }
}
