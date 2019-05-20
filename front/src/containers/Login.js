import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  login
} from '../actions/index'
import 'antd/dist/antd.css'
import LoginForm from '../components/LoginForm'
import { Typography } from 'antd'
const { Title } = Typography

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { dispatch } = this.props
    dispatch(login(e)).then(e => {
      this.props.history.push('/')
      // header周りの情報更新のためログインあとにreloadする
      window.location.reload()
    })
  }

  render() {
    return (
      <div>
        <Title>LOG IN</Title>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default connect() (Login)
