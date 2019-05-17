import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchListMemos,
  deleteMemo,
} from '../actions'
import Memos from '../components/Memos'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { NavLink } from 'react-router-dom'
import { Cookie } from '../cookie'

export default class LoginMenu extends Component {
  render() {
    const cookie = Cookie()
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
