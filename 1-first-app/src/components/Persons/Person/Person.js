import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div class="Person">
            <p><label>Person:</label> {props.name} | <label>Age:</label>{props.age}</p>
            { props.children ? <p>{props.children}</p> : null }
        </div>
    )
};

export default person;