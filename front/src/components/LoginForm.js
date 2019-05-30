import React, { useState } from 'react'
import { Form, Button, Input } from 'antd'

let LoginForm = props => {
  const { handleLogin, invalid } = props
  const [email, setEmail] = useState('');
  const handleChangeEmail = (event) => { setEmail(event.target.value); }
  const [password, setPassword] = useState('');
  const handleChangePassword = (event) => { setPassword(event.target.value); }

  const handleForm = e => {
    e.preventDefault();
    handleLogin({ email: email, password: password })
  }

  return <Form onSubmit={handleForm}>
           <Form.Item label="Email">
             <Input name="email" type="text" label="Email" value={email} onChange={handleChangeEmail} />
           </Form.Item>
           <Form.Item label="Password">
             <Input name="password" type="password" label="Password" value={password} onChange={handleChangePassword} />
           </Form.Item>
           <Button type="primary" htmlType="submit" disabled={invalid} >Login</Button>
         </Form>
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

export default WrappedLoginForm
