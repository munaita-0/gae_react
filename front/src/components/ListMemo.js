import React, { Component } from 'react'
import Memos from '../components/Memos'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { NavLink } from 'react-router-dom'
import {Configs} from '../config'
import {Cookie} from '../cookie'
import axios from 'axios'
import { Typography } from 'antd'
const { Title } = Typography

export default class ListMemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      memos: {},
      isFetching: false
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.fetchMemos = this.fetchMemos.bind(this);
  }

  fetchMemos() {
    this.setState({isFetching: true})

    return axios.get(`${Configs.host}/memos`, Cookie.getHeaders())
      .then(response => this.setState({
        isFetching: false,
        memos: response.data
      }))
      .catch((err) => {
        console.log("Error in response");
        console.log(err.response.status);
        if (err.response.status === 401) {
          this.props.history.push('/log_in')
        } else {
          console.log(err)
          throw err
        }
      })
  }

  componentDidMount() {
    this.fetchMemos()
  }

  handleDelete(e) {
    axios.delete(`${Configs.host}/memos/${e.id}`, Cookie.getHeaders())
      .then(response => { this.fetchMemos() })
      .catch((err) => {
        console.log("Error in response");
        console.log(err.response.status);
        if (err.response.status === 401) {
          this.props.history.push('/log_in')
        } else {
          console.log(err)
          throw err
        }
      })
  }

  render() {
    const { memos, isFetching } = this.state

    return (
      <div>
        <Title>MEMO LIST</Title>
        <Button type="primary"><NavLink to='/create'>Create</NavLink></Button>
        {isFetching && memos.length === 0 && <h2>Loading...</h2>}
        {!isFetching && memos.length === 0 && <h2>Enpty.</h2>}
        {memos.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Memos memos={memos} handleDelete={this.handleDelete} />
          </div>
        )}
      </div>
    )
  }
}
