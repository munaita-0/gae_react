import { Component } from 'react'
import 'antd/dist/antd.css'
import { Cookie } from '../cookie'

export default class LoginMenu extends Component {
  render() {
    const cookie = Cookie.cookieMap()
    if (cookie['uid'] &&
      cookie['client'] &&
      cookie['access-token']
    ) {
      console.log(cookie)
      return 'login'
    } else {
      return 'not login'
    }
  }
}
