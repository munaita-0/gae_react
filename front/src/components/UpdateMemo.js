import React, { Component } from 'react'
import 'antd/dist/antd.css'
import MemoForm from '../components/MemoForm'
import { Typography } from 'antd'
import axios from 'axios'
import {Configs} from '../config'
import {Cookie} from '../cookie'
const { Title } = Typography

export default class UpdateMemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatingMemo: {},
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(`${Configs.host}/memos/${this.props.match.params.id}`, Cookie.getHeaders())
      .then(response => this.setState({updatingMemo: response.data}))
      .catch((err) => {
        console.log("Error in response");
        console.log(err.response.status);
        if (err.response.status === 401) {
          this.props.history.push('/log_in')
        } else {
          console.log(err)
        }
      })
  }

  handleSubmit(e) {
    axios.put(
      `${Configs.host}/memos/${this.state.updatingMemo.id}`,
      e,
      Cookie.getHeaders()
    )
      .then(e => { this.props.history.push('/') })
      .catch((err) => {
        console.log("Error in response");
        console.log(err.response.status);
        if (err.response.status === 401) {
          this.props.history.push('/log_in')
        } else {
          console.log(err)
        }
      })
  }

  render() {
    return (
      <div>
        <Title>EDIT MEMO</Title>
        <MemoForm
          handleSubmit={this.handleSubmit}
          initVals={this.state.updatingMemo}
        />
      </div>
    )
  }
}
