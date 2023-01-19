import Login from './pages/login.js'
import Singup from './pages/signup'
import { Card } from 'antd'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  let [currentIndex, setCurrentIndex] = useState(0)
  function changeRoute(index) {
    setCurrentIndex(index)
  }
  useEffect(() => {
    if(window.location.pathname.includes('/signup')) {
      setCurrentIndex(1)
    }
  }, [])
  return (
    <div className="login">
      <Card>
        <Router basename='jianshu_login'>
          <div className="sign-in-sing-up">
            <Link to="/login" className={ currentIndex === 0 ? "current-router" : ''} onClick={() => changeRoute(0)}>登录</Link>
            <b>·</b>
            <Link to="/signup" className={ currentIndex === 1 ? "current-router" : ''} onClick={() => changeRoute(1)}>注册</Link>
          </div>
          <Route path='/' component={Login} exact></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/signup' component={Singup}></Route>
        </Router>
      </Card>
    </div>
  )
}

export default App
