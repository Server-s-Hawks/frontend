//import logo from './logo.svg';
import React, { Component } from 'react';
import { Home } from './components/home';
import {Navbar} from './components/navbar';
import { Chat_bot } from './components/chatbot';

import './App.css';
//import {BrowserRouter as Route, Router, Routes} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Redirect} from  'react-router-dom';

function App() {
  return (
    <Router>
         <div>
       <div className='navbar'><Navbar/></div>
       <div className='App'>
         <Switch>
             
             <Route path='/home'><Home/></Route>
             <Route path='/bot' ><Chat_bot/></Route>
             
             </Switch>
         
       </div>
    </div>
    </Router>
 
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/

  );
}

export default App;
