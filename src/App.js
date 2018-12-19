import React, { Component } from 'react';
import books from './resources/pics/book-bindings-bookcase-books-694740.jpg';
import './App.css';
import Navegacao from './components/Navbar'
import Intro from './components/Intro'
import Search from './components/Search'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  componentDidUpdate() {
    fetch("http://openlibrary.org/search.json?q=orwell")
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    })
  }

  render() {
    return (
      <div className="App">
        <Navegacao />
        <img 
          src={books} 
          className="imgStyle"
          alt="A pile of books" />
        <Intro className="" />
        <h1 className="hStyle">Experimente</h1>
        <Search />
      </div>
    );
  }
}

export default App;
