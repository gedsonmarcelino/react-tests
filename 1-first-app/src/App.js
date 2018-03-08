import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: {
      name: 'Choper',
      age: 10000
    }
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
    this.setState({persons:{
      name: 'New Choper',
      age: 1
    }});  
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, this is my first application using react.</h1>
        <Person name="Darth Vader" age="200"/>
        <Person name="Paspartour" age="35">Let's get traveled!</Person>
        <Person name={this.state.persons.name} age={this.state.persons.age}/>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}

export default App;
