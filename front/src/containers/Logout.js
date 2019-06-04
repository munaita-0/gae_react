import React from 'react'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import LogoutForm from '../components/LogoutForm'
import {Configs} from '../config'
import {Cookie} from '../cookie'
import axios from 'axios'
import { Typography } from 'antd'
import { loginStatus } from '../actions/LoginActions'
const { Title } = Typography


let Logout = props => {

  const handleSubmit = e => {
    e.preventDefault();

    axios.delete(
      `${Configs.host}/auth/sign_out`,
      Cookie.getHeaders()
    ).then(response => {
      Cookie.clear();
      props.handleUpdateLogin(false);
      props.history.push('/')
    }).catch(err => {
      console.log(err)
      throw err
    })
  }

  return (
    <div>
    <Title>SIGN OUT</Title>
    <LogoutForm handleSubmit={handleSubmit} />
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
) (Logout)
