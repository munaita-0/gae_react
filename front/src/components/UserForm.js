import { Form, Button, Input } from 'antd'
import React, { useState } from 'react'

let UserForm = props => {
  const { handleSubmit, invalid, initialValues } = props

  let initName = ''
  let initEmail = ''
  let initPassword = ''

  if (initialValues) {
    initName = initialValues.name
    initEmail = initialValues.email
    initPassword = initialValues.password
  }

  const [name, setName] = useState(initName);
  const handleChangeName = (event) => { setName(event.target.value); }
  const [email, setEmail] = useState(initEmail);
  const handleChangeEmail = (event) => { setEmail(event.target.value); }
  const [password, setPassword] = useState(initPassword);
  const handleChangePassword = (event) => { setPassword(event.target.value); }

  const handleSubmitForm = (e) => {
    e.preventDefault(e)
    handleSubmit({ name: name, email: email, password: password })
  }

  return <Form onSubmit={handleSubmitForm}>
           <Form.Item label="Name">
             <Input name="name" type="text" label="Name" value={name} onChange={handleChangeName}/>
           </Form.Item>
           <Form.Item label="Email">
             <Input name="name" type="text" label="Email" value={email} onChange={handleChangeEmail}/>
           </Form.Item>
           <Form.Item label="Password">
             <Input name="password" type="password" label="Password" value={password} onChange={handleChangePassword} />
           </Form.Item>
           <Button type="primary" htmlType="submit" disabled={invalid} >submit</Button>
         </Form>
}

export default UserForm
