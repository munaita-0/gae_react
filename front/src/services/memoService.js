import axios from 'axios'
import {Configs} from '../config'
import {Cookie} from '../cookie'

export const memoService = {
  get,
  destroy,
  update,
  create
}

function get(url) {
  return axios.get(url, getHeaders())
    .catch((err) => {
      console.log("Error in response");
      console.log(err.response.status);
      return err;
    })
}

function destroy(url) {
  return axios.delete(url, getHeaders())
    .catch((err) => {
      console.log("Error in response");
      console.log(err.response.status);
      return err;
    })
}

function update(url, obj) {
  return axios.put(url, obj, getHeaders())
    .catch((err) => {
      console.log("Error in response");
      console.log(err.response.status);
      return err;
    })
}

function create(url, obj) {
  return axios.post( url, obj, getHeaders())
    .catch((err) => {
      console.log("Error in response");
      console.log(err.response.status);
      return err;
    })
}

function getHeaders() {
  const cookie = Cookie();
  return  { 
    headers: {
      uid: cookie['uid'],
      client: cookie['client'],
      'access-token': cookie['access-token'],
    }
  }
}
