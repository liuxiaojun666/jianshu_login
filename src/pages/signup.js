import { Form, Input, Button, message } from 'antd'
import React from 'react'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import '../styles/login.scss'
import axios from 'axios'
const layout = {
  wrapperCol: { offset: 4, span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
}

const loginRules = {
  username: [{ required: true, message: '请输入昵称!' }],
  email: [{ required: true, message: '请输入邮箱!' }],
  Password: [{ required: true, message: '请输入密码!' }],
}
export default function Signup() {
  const onFinish = (values) => {
    let user = {
      username: values.username,
      email: values.email,
      password: values.password
    }
    // 调接口
    axios.post('https://conduit.productionready.io/api/users', {user}).then(() => {
      message.success('注册成功');
    }).catch((err) => {
      message.error(err)
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div>
        <Form
          {...layout}
          name='basic'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name='username' rules={loginRules.username}>
            <Input prefix={<UserOutlined />} placeholder="你的昵称"/>
          </Form.Item>
          <Form.Item name='email' rules={loginRules.email}>
            <Input prefix={<MailOutlined />} placeholder="邮箱"/>
          </Form.Item>
          <Form.Item name='password' rules={loginRules.Password}>
            <Input.Password prefix={<LockOutlined />} placeholder="设置密码"/>
          </Form.Item>
          <Form.Item {...tailLayout} name="loginBtn">
            <Button type='primary' shape='round' htmlType='submit' size='large' block style={{background: "#42c02e", border: 'none'}}>
              注册
            </Button>
          </Form.Item>
        </Form>
    </div>
  )
}
