import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.css'
moment.locale('zh-cn')

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
