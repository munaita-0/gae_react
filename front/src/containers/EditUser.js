import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  editUser,
  fetchUser,
} from '../actions/index'
import 'antd/dist/antd.css'
import UserForm from '../components/UserForm'

class EditUser extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUser())
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
  auth: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  let { isFetching, editingUser, auth } = state || { isFetching: true, editingUser: {} }

  return {
    editingUser,
    isFetching,
    auth
  }
}

export default connect(mapStateToProps) (EditUser)
