import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button, Input } from 'antd'

const renderField = ({ input, label, type, meta}) => {
  return (
    <Form.Item
      label={label}
    >
      <div>
        <Input {...input} placeholder={label} type={type}/>
      </div>
    </Form.Item>
  )
}


let LogoutForm = props => {
  const { handleSubmit } = props
  return <Form onSubmit={handleSubmit}>
           <Button type="primary" htmlType="submit" >Logout</Button>
         </Form>
}

LogoutForm = reduxForm({
  form: 'logout',
})(LogoutForm)

export default LogoutForm
