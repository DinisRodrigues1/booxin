import React, { Component } from 'react'
import books from './resources/pics/book-bindings-bookcase-books-694740.jpg'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Results from './components/Results'
import Navegacao from './components/Navbar'
import Intro from './components/Intro'
import Search from './components/Search'
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navegacao />
          <img 
            src={books} 
            className="imgStyle"
            alt="A pile of books" />
          <Intro className="" />
          <h1 className="hStyle">Experimente</h1>
          <Search />
          <Route exact path="/" component={App} />
          <Route path="/results" component={Results} />
        </div>
      </Router>
    );
  }
}

export default App;
