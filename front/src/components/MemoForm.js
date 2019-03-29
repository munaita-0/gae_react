import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button, Input } from 'antd'

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 2) {
    errors.name = 'Must be more than 2 characters'
  }

  if (!values.description) {
    errors.description = 'Required'
  }

  return errors
}

const renderField = ({ input, label, type, meta}) => {
  const hasError = meta.touched && meta.invalid;

  return (
    <Form.Item
      label={label}
      validateStatus={hasError ? "error" : "success"}
      help={hasError && meta.error}
    >
      <div>
        <Input {...input} placeholder={label} type={type}/>
      </div>
    </Form.Item>
  )
}


let MemoForm = props => {
  const { handleSubmit, invalid } = props
  return <Form onSubmit={handleSubmit}>
           <Field name="name" component={renderField} type="text" label="Name" />
           <Field name="description" component={renderField} type="text" label="Description" />
           <Button type="primary" htmlType="submit" disabled={invalid} >Create</Button>
         </Form>
}

MemoForm = reduxForm({
  form: 'memo',
  validate
})(MemoForm)

export default MemoForm
