import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { memoActions } from '../actions/index'
import 'antd/dist/antd.css'
import MemoForm from '../components/MemoForm'
import { Typography } from 'antd'
const { Title } = Typography

class UpdateMemo extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(memoActions.fetchMemo(this.props.match.params.id))
      .catch((err) => {
        if (err.response.status === 401) {
          this.props.history.push('/log_in')
        } else {
          console.log(err)
          throw err
        }
      })
  }

  handleSubmit(e) {
    const { dispatch, updatingMemo } = this.props
    dispatch(memoActions.updateMemo(updatingMemo.id, e))
      .then(e => { this.props.history.push('/') })
      .catch((err) => {
        if (err.response.status === 401) {
          this.props.history.push('/log_in')
        } else {
          console.log(err)
          throw err
        }
      })
  }

  render() {
    const { updatingMemo } = this.props

    return (
      <div>
        <Title>EDIT MEMO</Title>
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
