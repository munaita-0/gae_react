import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchMemos,
  createMemo,
  deleteMemo,
} from '../actions'
import Memos from '../components/Memos'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleRefreshClick = this.handleRefreshClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  componentDidMount() {
    console.log('in didmount')
    const { dispatch } = this.props
    dispatch(fetchMemos())
  }

  handleChangeName(e) {
    this.setState({name: e.target.value});
  }

  handleChangeDescription(e) {
    this.setState({description: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props
    dispatch(createMemo(this.state))
  }

  handleDelete(e) {
    const { dispatch } = this.props
    dispatch(deleteMemo(e.id))
  }

  render() {
    const { memos, isFetching } = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName} />
            Description:
            <input type="text" name="description" value={this.state.description} onChange={this.handleChangeDescription}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
     

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

AsyncApp.propTypes = {
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

export default connect(mapStateToProps) (AsyncApp)
