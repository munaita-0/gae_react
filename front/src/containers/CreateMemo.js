import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  createMemo,
} from '../actions'
import { Form, Input, Button, } from 'antd'
import 'antd/dist/antd.css'

class CreateMemo extends Component {
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

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props
    dispatch(createMemo(this.state)).then(e => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Name">
            <Input name="name" value={this.state.name} onChange={this.handleChangeName} />
          </Form.Item>
          <Form.Item label="description">
            <Input name="description" value={this.state.description} onChange={this.handleChangeDescription}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" >Create</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

CreateMemo.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  // let { isFetching, memos } = state || { isFetching: true, memos: [] }
  // memos = !memos ? [] : memos
  //
  // return {
  //   memos,
  //   isFetching,
  // }
}

export default connect(mapStateToProps) (CreateMemo)
