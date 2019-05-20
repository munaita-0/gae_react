import {Configs} from '../config'
import {Cookie} from '../cookie'
import axios from 'axios'

export const userActions = {
}

export function createUser(user) {
  return dispatch => {
    return axios.post(`${Configs.host}/auth`, {
      name: user.name,
      email: user.email,
      password: user.password,
    })
  }
}

export function login(idpass) {
  return dispatch => {
    return axios.post(`${Configs.host}/auth/sign_in`, {
      email: idpass.email,
      password: idpass.password,
    }).then(response => dispatch(receiveLogin(response.headers)))
  }
}

export function receiveLogin(json) {
  return {
    type: 'RECEIVE_LOGIN',
    auth: json,
  }
}

export function logout() {
  return dispatch => {
    return axios.delete(
      `${Configs.host}/auth/sign_out` 
    ).then(response => dispatch(function(e){
      document.cookie = `uid=`
      document.cookie = `client=`
      document.cookie = `access-token=`
    }))
  }
}

export function fetchUser() {
  return dispatch => {
    return axios.get(
      `${Configs.host}/auth/password/edit`,
      Cookie.getHeaders()
    ).then(response => dispatch(receiveEditingUser(response.data)))
  }
}

export function receiveEditingUser(json) {
  return {
    type: 'RECEIVE_EDITING_USER',
    updatingMemo: json,
  }
}

export function editUser(user, auth) {
  return dispatch => {
    return axios.put(
      `${Configs.host}/auth`,
      {
        name: user.name,
        password: user.password,
        password_confirmation: user.password
      },
      Cookie.getHeaders()
    )
  }
}
