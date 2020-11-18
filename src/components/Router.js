import React, { useState } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Auth from "routes/Auth"
import Home from "routes/Home"
import Profile from "routes/Profile"
import Navigation from "./Navigation"

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {/* Switch Router 사용 isLoggedIn 로그인시 Home 아니면 Auth 화면 */}
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ?
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
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