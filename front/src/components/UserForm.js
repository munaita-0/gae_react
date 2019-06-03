import { Form, Button, Input } from 'antd'
import React from 'react'

let UserFormBase = props => {
  const { handleSubmit, initVals } = props
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

  const handleSubmitForm = e => {
    e.preventDefault(e)

    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        handleSubmit(values)
      }
    });
  }

  const hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  const nameError = isFieldTouched('name') && getFieldError('name');
  const emailError = isFieldTouched('email') && getFieldError('email');
  const passwordError = isFieldTouched('password') && getFieldError('password');

  return <Form onSubmit={handleSubmitForm}>
           <Form.Item label="Name" validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
             {getFieldDecorator(
               'name', 
               {
                 initialValue: initVals ? initVals.name : '',
                 rules: [ { required: true, message: 'Please input your email!' }]
               }
              )(<Input placeholder="Name" />)
             }
           </Form.Item>
           <Form.Item label="Email" validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
             {getFieldDecorator(
               'email', 
               { 
                 initialValue: initVals ? initVals.email : '',
                 rules: [
                   { required: true, message: 'Please input your email!' },
                   { type: 'email', message: 'The input is not valid E-mail!' },
                 ]
               }
              )(<Input placeholder="Email" />)
             }
           </Form.Item>
           <Form.Item label="Password" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
             {getFieldDecorator(
               'password', 
               {
                 initialValue: initVals ? initVals.password : '',
                 rules: [
                   { required: true, message: 'Please input your password!' },
                   { min: 3, message: 'more than three letters' },
                 ]
               }
              )(<Input type="password" placeholder="Password" />)
             }
           </Form.Item>
           <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} >Login</Button>
         </Form>
}

const UserForm = Form.create({ name: 'user' })(UserFormBase);

export default UserForm
