import {Configs} from './config'
import axios from 'axios'

// TODO instance化したほうがよさそう
export class Cookie {

  static cookieMap() {
    let cookie_map = {}
    document.cookie.split(';').forEach(cookie_str => {
      const key_value = cookie_str.split('=')

      if (!key_value[0]) {
        return cookie_map;
      }

      cookie_map[key_value[0].trim()] = key_value[1].trim()
    })

    return cookie_map;
  }

  static getHeaders() {
    const map = Cookie.cookieMap()
    return  { 
      headers: {
        uid: map['uid'],
        client: map['client'],
        'access-token': map['access-token'],
      }
    }
  }

  static clear() {
    document.cookie = `uid=`
    document.cookie = `client=`
    document.cookie = `access-token=`
  }

  static isExist() {
    const map = Cookie.cookieMap()
    return (map['uid'] && map['client'] && map['access-token'])
  }

  static activeCheck() {
    return axios.get(
      `${Configs.host}/auth/validate_token`,
      Cookie.getHeaders()
    ).then(response => {
      console.log('==auth ok==')
      return true
    }).catch(err => {
      // TODO authタイムアウトでここに処理入るか確認
      // 例外処理
      console.log('==auth error==')
      console.log(err)
      return false
    })
  }
}
