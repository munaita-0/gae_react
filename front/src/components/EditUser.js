import React, { Component } from 'react'
import 'antd/dist/antd.css'
import UserForm from '../components/UserForm'
import { Typography } from 'antd'
import axios from 'axios'
import {Configs} from '../config'
import {Cookie} from '../cookie'
const { Title } = Typography

export default class EditUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editingUser: {},
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    return axios.get(
      `${Configs.host}/users/${this.props.match.params.id}`,
      Cookie.getHeaders()
    )
      .then(response => this.setState({editingUser: response.data}))
      .catch((err) => {
        if (err.response.status === 401) {
          this.props.history.push('/log_in')
        } else {
          // TODO 例外処理
        }
      })
  }

  handleSubmit(e) {
    // TODO 挙動が怪しいので確認
    return axios.put(
      `${Configs.host}/auth`,
      {
        name: e.name,
        password: e.password,
        password_confirmation: e.password
      },
      Cookie.getHeaders()
    )
      .then(e => {this.props.history.push('/')})
      .catch((err) => {
        if (err.response.status === 401) {
          this.props.history.push('/log_in')
        } else {
          // TODO 例外処理
        }
      })
  }

  render() {
    return (
      <div>
        <Title>EDIT USER</Title>
        <UserForm
          handleSubmit={this.handleSubmit}
          initVals={this.state.editingUser}
        />
      </div>
    )
  }
}
