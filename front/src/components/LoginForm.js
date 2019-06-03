import React, { useState } from 'react'
import { Form, Button, Input } from 'antd'

let LoginForm = props => {
  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  const handleForm = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        props.handleLogin(values)
      }
    });
  }

  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

  const emailError = isFieldTouched('email') && getFieldError('email');
  const passwordError = isFieldTouched('password') && getFieldError('password');

  return <Form onSubmit={handleForm}>
           <Form.Item label="Email" validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
             {getFieldDecorator(
               'email', 
               { rules: [
                 { required: true, message: 'Please input your email!' },
                 { type: 'email', message: 'The input is not valid E-mail!' },
               ]}
              )(<Input placeholder="Email" />)
             }
           </Form.Item>
           <Form.Item label="Password" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
             {getFieldDecorator(
               'password', 
               { rules: [
                 { required: true, message: 'Please input your password!' },
                 { min: 3, message: 'more than three letters' },
               ]}
              )(<Input type="password" placeholder="Password" />)
             }
           </Form.Item>
           <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} >Login</Button>
         </Form>
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

export default WrappedLoginForm
