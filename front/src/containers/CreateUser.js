import React, { Component } from 'react'
import 'antd/dist/antd.css'
import UserForm from '../components/UserForm'
import { message } from 'antd';
import axios from 'axios'
import {Configs} from '../config'
import { Typography } from 'antd'
const { Title } = Typography

export default class CreateUser extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(user) {
    axios.post(`${Configs.host}/auth`, user)
    .then(e => { this.props.history.push('/') })
    .catch(e => { message.error(e) })
  }

  render() {
    return (
      <div>
        <Title>SIGN UP</Title>
        <UserForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
