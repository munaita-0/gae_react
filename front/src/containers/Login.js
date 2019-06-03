import React from 'react'
import { connect } from 'react-redux'
import {
  login
} from '../actions/index'
import 'antd/dist/antd.css'
import { WrappedLoginForm } from '../components/index'
import { Typography } from 'antd'
const { Title } = Typography

const Login = props => {
  const handleSubmit = e => {
    props.dispatch(login(e)).then(e => {
      props.history.push('/')
      // header周りの情報更新のためログインあとにreloadする
      window.location.reload()
    })
  }

  return (
    <div>
    <Title>LOG IN</Title>
    <WrappedLoginForm handleLogin={handleSubmit} />
    </div>
  )
}

export default connect() (Login)
