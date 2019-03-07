import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  // selectSubreddit,
  fetchMemos,
  createMemo,
  // invalidateSubreddit
} from '../actions'
// import Picker from '../components/Picker'
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
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  componentDidMount() {
    console.log('in didmount')
    const { dispatch } = this.props
    dispatch(fetchMemos())
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
  //     const { dispatch, selectedSubreddit } = this.props
  //     dispatch(fetchPostsIfNeeded(selectedSubreddit))
  //   }
  // }

  // handleChange(nextSubreddit) {
  //   this.props.dispatch(selectSubreddit(nextSubreddit))
  //   this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
  // }

  // handleRefreshClick(e) {
  //   e.preventDefault()
  //   const { dispatch, selectedSubreddit } = this.props
  //   dispatch(invalidateSubreddit(selectedSubreddit))
  //   dispatch(fetchPostsIfNeeded(selectedSubreddit))
  // }

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
            <Memos memos={memos} />
          </div>
        )}
      </div>
    )
  }
}

AsyncApp.propTypes = {
  // selectedSubreddit: PropTypes.string.isRequired,
  memos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  // lastUpdated: PropTypes.number,
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
