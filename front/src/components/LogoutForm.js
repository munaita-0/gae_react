import React from 'react'
import { reduxForm } from 'redux-form'
import { Form, Button } from 'antd'

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
