import React, { Component } from 'react'
import Users from './Users'
import 'antd/dist/antd.css'
import { Typography } from 'antd'
import axios from 'axios'
import {Configs} from '../config'
import {Cookie} from '../cookie'
const { Title } = Typography

// https://github.com/arman37/CRUD_ReactJS/blob/master/app/CRUDContainer.js

export default class ListUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: {},
      isFetching: false
    }
  }

  componentDidMount() {
    this.setState({isFetching: true})

    axios.get(`${Configs.host}/users`, Cookie.getHeaders())
      .then(response => this.setState({
        isFetching: false,
        users: response.data
      }))
      .catch((err) => {
        console.log("Error in response");
        console.log(err.response.status);
        Cookie.clear();
        throw err;
      })
  } 

  render() {
    const { users, isFetching } = this.state
    return (
      <div>
      <Title>ACCOUNT LIST</Title>
      {isFetching && users.length === 0 && <h2>Loading...</h2>}
      {!isFetching && users.length === 0 && <h2>Enpty.</h2>}
      {users.length > 0 && (
        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
        <Users users={users} />
        </div>
      )}
      </div>
    )
  }
}
