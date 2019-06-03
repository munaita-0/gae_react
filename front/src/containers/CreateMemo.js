import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  memoActions,
} from '../actions/index'
import 'antd/dist/antd.css'
import MemoForm from '../components/MemoForm'

class CreateMemo extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { dispatch } = this.props
    dispatch(memoActions.createMemo(e)).then(e => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div>
        <MemoForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default connect() (CreateMemo)
