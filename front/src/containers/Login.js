import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/LoginActions'
import 'antd/dist/antd.css'
import { WrappedLoginForm } from '../components/index'
import {Configs} from '../config'
import {Cookie} from '../cookie'
import axios from 'axios'
import { loginStatus } from '../actions/LoginActions'
import { Typography } from 'antd'
const { Title } = Typography

const Login = props => {

  const handleSubmit = e => {

    return axios.post(
      `${Configs.host}/auth/sign_in`,
      { email: e.email, password: e.password }
    ).then(response => {
      document.cookie = `uid=${response.headers.uid}`
      document.cookie = `client=${response.headers.client}`
      document.cookie = `access-token=${response.headers['access-token']}`
      props.handleUpdateLogin(true)
      props.history.push('/')
    }).catch(err => {
      console.log(err)
      throw err
    })
  }

  return (
    <div>
    <Title>LOG IN</Title>
    <WrappedLoginForm handleLogin={handleSubmit} />
    </div>
  )
}

function mapStateToProps(state) {
  let { login } = state
  return { login }
}

function mapDispatchToProps(dispatch) {
  return {
    handleUpdateLogin: bool => {
      dispatch(loginStatus(bool))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Login)
