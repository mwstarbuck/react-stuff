
import React from 'react'; // don't need to import the {Component} because we're using a function
//ES6 function syntax
const person = (props) => {  // props are the properties that are on the component e.g name='Max' age="28"
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;

/*
    REM: In its simplest form a component is just a function with JSX that returns a some html
*/
