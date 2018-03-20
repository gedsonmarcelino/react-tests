import React, { Component } from 'react';
import './App.css';

import Pessoas from './components/Pessoas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>GraphQL</h1>        
        <h2>Pessoas</h2>
        {/* <Pessoas /> */}
      </div>
    );
  }
}

export default App;
