import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/LoginActions'
import 'antd/dist/antd.css'
import LogoutForm from '../components/LogoutForm'
import { Typography } from 'antd'
const { Title } = Typography

const Logout = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch(logout()).then(e => {
      props.history.push('/')
      // header周りの情報更新のためログインあとにreloadする
      window.location.reload()
    })
  }

  return (
    <div>
    <Title>SIGN OUT</Title>
    <LogoutForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default connect() (Logout)
