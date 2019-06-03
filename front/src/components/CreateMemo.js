import React from 'react'
import 'antd/dist/antd.css'
import MemoForm from '../components/MemoForm'
import axios from 'axios'
import {Configs} from '../config'
import {Cookie} from '../cookie'
import { Typography } from 'antd'
const { Title } = Typography

const CreateMemo = props => {

  const handleSubmit = memo => {
    axios.post(
      `${Configs.host}/memos`,
      memo,
      Cookie.getHeaders()
    )
      .then(e => { props.history.push('/') })
      .catch((err) => {
        console.log("Error in response");
        console.log(err.response.status);
        throw err;
      })
  }

  return (
    <div>
    <Title>Create Memo</Title>
    <MemoForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default CreateMemo
