import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    e.preventDefault();
    const { dispatch, memoFormValues } = this.props
    dispatch(createMemo(memoFormValues)).then(e => {
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

CreateMemo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  memoFormValues: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  let { form: { memo: memoForm } } = state
  memoForm = !memoForm ? {} : memoForm
  
  return {
    memoFormValues: memoForm.values || {}
  }
}

export default connect(mapStateToProps) (CreateMemo)
