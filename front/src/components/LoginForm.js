import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button, Input } from 'antd'

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.description = 'Required'
  }

  if (!values.password) {
    errors.password = 'Required'
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


let LoginForm = props => {
  const { handleSubmit, invalid } = props
  return <Form onSubmit={handleSubmit}>
           <Field name="email" component={renderField} type="text" label="Email" />
           <Field name="password" component={renderField} type="text" label="Password" />
           <Button type="primary" htmlType="submit" disabled={invalid} >Login</Button>
         </Form>
}

LoginForm = reduxForm({
  form: 'login',
  validate
})(LoginForm)

export default LoginForm
