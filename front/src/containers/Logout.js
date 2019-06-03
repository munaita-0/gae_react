import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  logout
} from '../actions/index'
import 'antd/dist/antd.css'
import LogoutForm from '../components/LogoutForm'
import { Typography } from 'antd'
const { Title } = Typography

class Logout extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { dispatch } = this.props
    e.preventDefault();
    dispatch(logout()).then(e => {
      this.props.history.push('/')
      // header周りの情報更新のためログインあとにreloadする
      window.location.reload()
    })
  }

  render() {
    return (
      <div>
        <Title>SIGN OUT</Title>
        <LogoutForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default connect() (Logout)
