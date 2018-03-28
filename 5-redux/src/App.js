import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Auth from './components/Auth'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Test REDUX</h1>
        </header>
        <div className="container">
          <Auth />
        </div>
      </div>
    );
  }
}

export default App;
