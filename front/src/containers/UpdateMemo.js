import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  updateMemo,
  fetchMemo,
} from '../actions'

class UpdateMemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  handleChangeName(e) {
    this.setState({name: e.target.value});
  }

  handleChangeDescription(e) {
    this.setState({description: e.target.value});
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchMemo(this.props.match.params.id))
  }

  componentDidUpdate(prevProps) {
    const { updatingMemo } = this.props
    if (prevProps.updatingMemo.name !== updatingMemo.name) {
      this.setState({
        name: updatingMemo.name,
        description: updatingMemo.description
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch, updatingMemo } = this.props
    dispatch(updateMemo(updatingMemo.id, this.state)).then(e => {
      this.props.history.push('/')
    })
  }

  render() {
    const { updatingMemo, isFetching } = this.props

    return (
      <div>
        {isFetching && !updatingMemo && <h2>Loading...</h2>}
        {!isFetching && updatingMemo.name && <h2>Enpty.</h2>}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName} />
            Description:
            <input type="text" name="description" value={this.state.description} onChange={this.handleChangeDescription}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

UpdateMemo.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  let { isFetching, updatingMemo } = state || { isFetching: true, updatingMemo: {} }
  
  return {
    updatingMemo,
    isFetching,
  }
}

export default connect(mapStateToProps) (UpdateMemo)
