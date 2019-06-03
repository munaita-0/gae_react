import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button, Input } from 'antd'

// TODO 編集の実装
let MemoFormBase = props => {
  const { handleSubmit } = props
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

  const hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  const handleSubmitForm = e => {
    e.preventDefault(e)

    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        handleSubmit(values)
      }
    });
  }

  const nameError = isFieldTouched('name') && getFieldError('name');
  const descriptionError = isFieldTouched('description') && getFieldError('description');

  return <Form onSubmit={handleSubmitForm}>
           <Form.Item label="Name" validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
             {getFieldDecorator(
               'name', 
               { rules: [ { required: true, message: 'Please input your email!' }, ]}
              )(<Input placeholder="Name" />)
             }
           </Form.Item>
           <Form.Item label="Description" validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
             {getFieldDecorator(
               'description', 
               { rules: [ { required: true, message: 'Please input your description!' }, ]}
              )(<Input placeholder="Description" />)
             }
           </Form.Item>
           <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} >Login</Button>
         </Form>
}

const MemoForm = Form.create({ name: 'memo' })(MemoFormBase);
export default MemoForm
