import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div class="Person">
            <p>Person: {props.name} | Age: {2*props.age}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;