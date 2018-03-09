import React, { Component } from 'react';
import Radium from 'radium';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    showItems: false ,
    items: [
      { name: 'Darth Vader', age: 200 },
      { name: 'Shim', age: 25 },
      { name: 'Passapartout', age: 38 }
    ]
  }

  onToggleHandle = () => {
    let value = !this.state.showItems;
    this.setState({ showItems : value });
  }

  render() {
    const style = {
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    return (
      <div className="App">
        <h1>Hi, this is my first application using react.</h1>
        <button style={style} onClick={this.onToggleHandle}>Show Items</button>
        <hr/>
        {this.state.showItems ?
          <div>
            {this.state.items.map(person => <Person name={person.name} age={person.age}/> )}
          </div> : null
        }
      </div>
    );
  }
}

export default Radium(App);
