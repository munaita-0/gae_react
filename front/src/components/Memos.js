import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Button, Table } from 'antd'
import 'antd/dist/antd.css'

export default class Memos extends Component {
  render() {
    const { memos, handleDelete } = this.props

    const dataSource = memos.map((memo, i) => ({
      key: i.toString(),
      id: memo.id.toString(),
      name: memo.name,
      description: memo.description,
      edit: <NavLink to={`update/${memo.id}`}>Update</NavLink>,
      delete: <Button type="primary" onClick={() => handleDelete(memo)}>delete</Button>
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
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: '',
        dataIndex: 'edit',
        key: 'edit',
      },
      {
        title: '',
        dataIndex: 'delete',
        key: 'delete',
      },
    ]

    return (
      <div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    )
  }
}

Memos.propTypes = {
  memos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func
}
