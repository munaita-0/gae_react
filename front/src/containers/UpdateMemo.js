import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  updateMemo,
  fetchMemo,
} from '../actions'
import 'antd/dist/antd.css'
import MemoForm from '../components/MemoForm'

class UpdateMemo extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchMemo(this.props.match.params.id))
  }

  handleSubmit(e) {
    const { dispatch, updatingMemo } = this.props
    dispatch(updateMemo(updatingMemo.id, e)).then(e => {
      this.props.history.push('/')
    })
  }

  render() {
    const { updatingMemo } = this.props
    
    return (
      <div>
        <MemoForm
          onSubmit={this.handleSubmit}
          initialValues={updatingMemo}
        />
      </div>
    )
  }
}

UpdateMemo.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  updatingMemo: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  let { isFetching, updatingMemo } = state || { isFetching: true, updatingMemo: {} }

  return {
    updatingMemo,
    isFetching,
  }
}

export default connect(mapStateToProps) (UpdateMemo)
