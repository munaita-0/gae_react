import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createUser,
} from '../actions/index'
import 'antd/dist/antd.css'
import UserForm from '../components/UserForm'
import { message } from 'antd';
import { Typography } from 'antd'
const { Title } = Typography

class CreateUser extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { dispatch } = this.props
    dispatch(createUser(e))
      .then(e => { this.props.history.push('/') })
      .catch(e => { message.error(e) })
  }

  render() {
    return (
      <div>
        <Title>SIGN UP</Title>
        <UserForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default connect() (CreateUser)
