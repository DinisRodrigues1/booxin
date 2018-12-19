import React from "react"
import App from './App'
import Results from './components/Results'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const AppRouter = () => (
  <Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/results" component={Results} />
    </Switch>
  </Router>
  
)

export default AppRouter
