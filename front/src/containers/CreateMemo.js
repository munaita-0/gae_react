import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createMemo,
} from '../actions'
import 'antd/dist/antd.css'
import MemoForm from '../components/MemoForm'

class CreateMemo extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log(e)
    const { dispatch } = this.props
    dispatch(createMemo(e)).then(e => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div>
        <MemoForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default connect() (CreateMemo)
