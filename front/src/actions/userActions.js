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

export function receiveUsers(json) {
  return {
    type: 'RECEIVE_USERS',
    users: json.map(v => {return v}),
  }
}

export function fetchListUsers() {
  return dispatch => {
    return axios.get(`${Configs.host}/users`, Cookie.getHeaders())
      .then(response => dispatch(receiveUsers(response.data)))
      .catch((err) => {
        console.log("Error in response");
        console.log(err.response.status);
        Cookie.clear();
        throw err;
      })
  }
}

export function fetchUser(id) {
  return dispatch => {
    return axios.get(
      `${Configs.host}/users/${id}`,
      Cookie.getHeaders()
    ).then(response => dispatch(receiveEditingUser(response.data)))
  }
}

export function receiveEditingUser(json) {
  return {
    type: 'RECEIVE_EDITING_USER',
    editingUser: json,
  }
}

export function editUser(user) {
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
