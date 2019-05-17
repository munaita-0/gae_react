import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  logout
} from '../actions/index'
import 'antd/dist/antd.css'
import LogoutForm from '../components/LogoutForm'

class Logout extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log(e)
    const { dispatch } = this.props
    dispatch(logout(e)).then(e => {
      this.props.history.push('/')
      // header周りの情報更新のためログインあとにreloadする
      window.location.reload()
    })
  }

  render() {
    return (
      <div>
        <LogoutForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default connect() (Logout)
