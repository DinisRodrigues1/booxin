import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SearchProvider from './searchContext'

ReactDOM.render(
    <SearchProvider>
        <App />
    </SearchProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
