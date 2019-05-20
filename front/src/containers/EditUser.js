import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  editUser,
  fetchUser,
} from '../actions/index'
import 'antd/dist/antd.css'
import UserForm from '../components/UserForm'
import { Typography } from 'antd'
const { Title } = Typography

class EditUser extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUser(this.props.match.params.id))
      .catch((err) => {
        if (err.response.status === 401) {
          this.props.history.push('/log_in')
        } else {
          // TODO 例外処理
        }
      })
  }

  handleSubmit(e) {
    const { dispatch } = this.props
    dispatch(editUser(e)).then(e => {
      this.props.history.push('/')
    })
  }

  render() {
    const { editingUser } = this.props

    return (
      <div>
        <Title>EDIT USER</Title>
        <UserForm
          onSubmit={this.handleSubmit}
          initialValues={editingUser}
        />
      </div>
    )
  }
}

EditUser.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  editingUser: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  let { isFetching, editingUser } = state || { isFetching: true, editingUser: {} }

  return {
    editingUser,
    isFetching,
  }
}

export default connect(mapStateToProps) (EditUser)
