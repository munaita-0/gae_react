import React from 'react'
import { Form, Button } from 'antd'

// loginしてたら押せないようにする
let LogoutForm = props => {
  const { handleSubmit } = props
  return <Form onSubmit={handleSubmit}>
           <Button type="primary" htmlType="submit" >Logout</Button>
         </Form>
}

export default LogoutForm
