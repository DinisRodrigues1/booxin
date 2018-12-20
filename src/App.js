import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import Results from './components/Results'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <div className="App">
          <Navigation />
          <Route exact path='/' component={Home}/>
          <Route path='/results' component={Results}/>
          <Footer/>
        </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
