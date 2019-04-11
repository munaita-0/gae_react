import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  login
} from '../actions'
import 'antd/dist/antd.css'
import LoginForm from '../components/LoginForm'

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log(e)
    const { dispatch } = this.props
    dispatch(login(e)).then(e => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default connect() (Login)
