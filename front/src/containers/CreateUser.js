import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createUser,
} from '../actions/index'
import 'antd/dist/antd.css'
import UserForm from '../components/UserForm'

class CreateUser extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log(e)
    const { dispatch } = this.props
    dispatch(createUser(e)).then(e => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div>
        <UserForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default connect() (CreateUser)
