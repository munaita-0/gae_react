import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { memoActions } from '../actions/index'
import Memos from '../components/Memos'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { NavLink } from 'react-router-dom'
import { Typography } from 'antd'
const { Title } = Typography

class ListMemo extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(memoActions.fetchListMemos())
      .catch((err) => {
        if (err.response.status === 401) {
          this.props.history.push('/log_in')
        } else {
          console.log(err)
          throw err
        }
      })
  }

  handleDelete(e) {
    const { dispatch } = this.props
    dispatch(memoActions.deleteMemo(e.id))
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
    const { memos, isFetching } = this.props

    return (
      <div>
        <Title>MEMO LIST</Title>
        <Button type="primary"><NavLink to='/create'>Create</NavLink></Button>
        {isFetching && memos.length === 0 && <h2>Loading...</h2>}
        {!isFetching && memos.length === 0 && <h2>Enpty.</h2>}
        {memos.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Memos memos={memos} handleDelete={this.handleDelete} />
          </div>
        )}
      </div>
    )
  }
}

ListMemo.propTypes = {
  memos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  let { isFetching, memos } = state || { isFetching: true, memos: [] }
  memos = !memos ? [] : memos

  return {
    memos,
    isFetching,
  }
}

export default connect(mapStateToProps) (ListMemo)
