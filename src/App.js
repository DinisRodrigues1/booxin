import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import Results from './components/Results'
import About from './components/About'
import Login from './components/Login'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Navigation />
            <Route exact path='/' component={Home}/>
            <Route path='/resultados' component={Results}/>
            <Route path="/sobre" component={About} />
            <Route path="/login" component={Login} />
            <Footer/>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App
