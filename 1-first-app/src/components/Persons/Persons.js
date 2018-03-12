import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props){
        super(props);
        console.log('[Persons.js] constructor()', props);
    }

    componentWillMount(){
        console.log('[Persons.js] componentWillMount()');
    }

    componentDidMount(){
        console.log('[Persons.js] componentDidMount()');
    }
    
    componentWillReceiveProps(nextProps){
        console.log('[Persons.js] componentWillReceiveProps()', nextProps);
    }

    render(){
        return(
            this.props.persons.map( (person,index) => <Person key={index} name={person.name} age={person.age}/> )
        )
    }
}

export default Persons;

