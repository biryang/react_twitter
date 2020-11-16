import React, { useState } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Auth from "../routes/Auth"
import Home from "../routes/Home"

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <Router>
      {/* Switch Router 사용 isLoggedIn 로그인시 Home 아니면 Auth 화면 */}
      <Switch>
        {isLoggedIn ?
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </> : (
            <Route exact path="/">
              <Auth />
            </Route>
          )}
      </Switch>
    </Router>
  )
}
export default AppRouter