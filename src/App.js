import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss';
import Navigation from './components/landingPage/Navigation'
import Footer from './components/landingPage/Footer'
import Home from './components/landingPage/Home'
import Results from './components/search/Results'
import About from './components/landingPage/About'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import UserPage from './components/user/UserPage'
import PwChange from './components/auth/PwChange'
import Library from './components/user/library'
import { connect } from 'react-redux'
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
            <Route path="/registo" component={Register} />
            <Route path="/painel" component={UserPage} />
            <Route path="/passwordreset" component={PwChange} />
            <Route path="/biblioteca" component={Library} />
            <Footer/>
          </div>
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App)
