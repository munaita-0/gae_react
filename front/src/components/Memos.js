import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Memos extends Component {
  render() {
    return (
      <ul>
        {this.props.memos.map((memo, i) => (
          <li key={i}>{memo.name}::{memo.description}</li>
        ))}
      </ul>
    )
  }
}

Memos.propTypes = {
  memos: PropTypes.array.isRequired
}
