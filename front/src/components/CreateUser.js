import React from 'react'
import 'antd/dist/antd.css'
import UserForm from '../components/UserForm'
import { message } from 'antd';
import axios from 'axios'
import {Configs} from '../config'
import { Typography } from 'antd'
const { Title } = Typography

const CreateUser = props => {
  const handleSubmit = user => {
    axios.post(`${Configs.host}/auth`, user)
      .then(e => { props.history.push('/') })
      .catch(e => { message.error(e) })
  }

  return (
    <div>
    <Title>SIGN UP</Title>
    <UserForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default CreateUser
