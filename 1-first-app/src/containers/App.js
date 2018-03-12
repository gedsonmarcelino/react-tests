import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    showItems: false ,
    items: [
      { name: 'Darth Vader', age: 200 },
      { name: 'Shim', age: 25 },
      { name: 'Passapartout', age: 38 }
    ]
  }

  constructor(props){
    super(props);
    console.log('[App.js] constructor()', props);
  }

  componentWillMount(){
    console.log('[App.js] componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount()');
  }

  onToggleHandle = () => {
    let value = !this.state.showItems;
    this.setState({ showItems : value });
  }

  render() {
    console.log('[App.js] render()');
    return (
      <div className={classes.App}>
        <Cockpit clicked={this.onToggleHandle} />
        {this.state.showItems ?
          <div>
            <Persons persons={this.state.items} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
