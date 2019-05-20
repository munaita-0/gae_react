import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchListUsers } from '../actions/index'
import Users from '../components/Users'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { NavLink } from 'react-router-dom'
import { Typography } from 'antd'
const { Title } = Typography

class ListUser extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchListUsers())
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
    const { users, isFetching } = this.props

    return (
      <div>
        <Title>ACCOUNT LIST</Title>
        {isFetching && users.length === 0 && <h2>Loading...</h2>}
        {!isFetching && users.length === 0 && <h2>Enpty.</h2>}
        {users.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Users users={users} />
          </div>
        )}
      </div>
    )
  }
}

ListUser.propTypes = {
  users: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  let { isFetching, users } = state || { isFetching: true, users: [] }
  users = !users ? [] : users

  return {
    users,
    isFetching,
  }
}

export default connect(mapStateToProps) (ListUser)
