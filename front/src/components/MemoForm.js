import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button, } from 'antd'

let MemoForm = props => {
  const { handleSubmit } = props
  return <Form onSubmit={handleSubmit}>
          <Form.Item label="Name">
            <Field name="name" component="input" type="text" />
          </Form.Item>
          <Form.Item label="description">
            <Field name="description" component="input" type="text" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" >Create</Button>
          </Form.Item>
        </Form>
}

MemoForm = reduxForm({
  form: 'memo'
})(MemoForm)

export default MemoForm
