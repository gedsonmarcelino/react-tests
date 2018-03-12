import React from 'react';

const cockpit = (props) => {
    return(
        <div>
            <h1>Hi, this is my first application using react.</h1>
            <button onClick={props.clicked}>Show Items</button>
            <hr/>
        </div>
    );
}

export default cockpit;