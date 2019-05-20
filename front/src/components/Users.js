import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Button, Table } from 'antd'
import 'antd/dist/antd.css'

export default class Users extends Component {
  render() {
    const { users } = this.props

    const dataSource = users.map((user, i) => ({
      key: i.toString(),
      id: user.id.toString(),
      name: user.name,
      email: user.email,
      edit: <Button type="primary"><NavLink to={`account_update/${user.id}`}>Update</NavLink></Button>,
    }))


    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: '',
        dataIndex: 'edit',
        key: 'edit',
      },
    ]

    return (
      <div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    )
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
}
