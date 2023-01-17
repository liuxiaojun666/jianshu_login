import { Form, Input, Button, Checkbox, message } from 'antd'
import React from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import '../styles/login.scss'
import axios from 'axios'
const layout = {
  wrapperCol: { offset: 4, span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
}

const loginRules = {
  email: [{ required: true, message: '请输入邮箱!' }],
  Password: [{ required: true, message: '请输入密码' }],
}
export default function Login() {
  const onFinish = (values) => {
    console.log('Success:', values)
    const user = {
      email: values.email,   
      password: values.password
    }
    axios.post('https://conduit.productionready.io/api/users/login', {user}).then(() => {
      localStorage.setItem('user', JSON.stringify({remember: values.remember, ...user}))
      message.success('登录成功')
    })
  }
  let user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))
  if(!user || !user.remember) {
    user = ''
  }
  return (
    <div>
        <Form
          {...layout}
          name='basic'
          initialValues={user}
          onFinish={onFinish}
        >
          <Form.Item name='email' rules={loginRules.email}>
            <Input prefix={<UserOutlined />} placeholder="手机号或邮箱"/>
          </Form.Item>

          <Form.Item name='password' rules={loginRules.Password}>
            <Input.Password prefix={<LockOutlined />} placeholder="密码"/>
          </Form.Item>
          <Form.Item {...tailLayout} >
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <span style={{float: 'right'}}>登录遇到问题?</span>
          </Form.Item>
          <Form.Item {...tailLayout} name="loginBtn">
            <Button type='primary' shape='round' htmlType='submit' size='large' block>
              登录
            </Button>
          </Form.Item>
        </Form>
    </div>
  )
}
