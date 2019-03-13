import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default class Memos extends Component {
  render() {
    const { memos, handleDelete } = this.props
    return (
      <ul>
        {memos.map((memo, i) => (
          <li key={memo.id}>
            {memo.id}::{memo.name}::{memo.description}
            <NavLink to={'update/' + memo.id}>Update</NavLink>
            <button onClick={() => handleDelete(memo)}>delete</button>
          </li>
        ))}
      </ul>
    )
  }
}

Memos.propTypes = {
  memos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func
}
