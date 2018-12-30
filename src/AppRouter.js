import React from "react"
import App from './App'
import Results from './components/Results'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const AppRouter = () => (
  <Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/resultado" component={Results} />
        <Route path="/sobre" component={About} />
        <Route path="/login" component={Login} />
    </Switch>
  </Router>
  
)

export default AppRouter
