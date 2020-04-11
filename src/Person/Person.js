
import React from 'react'; // don't need to import the {Component} because we're using a function
//ES6 function syntax
import styled from 'styled-components';
// import './Person.css';

const StyledDiv = styled.div`

    width: 60%;
    margin: 16px auto;
    border: 1px solid #cce;
    box-shadow: 2px 3px 2px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {  // props are the properties that are on the component e.g name='Max' age="28"
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        // <div className='Person' style={style}>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
};

export default person;

/*
    REM: In its simplest form a component is just a function with JSX that returns a some html
*/
