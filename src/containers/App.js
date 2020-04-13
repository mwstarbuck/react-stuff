// =============================================================
// Established React Method
// =============================================================



import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Persons from '../components/Persons/Persons';

const StyledButton = styled.button`

  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'gwgag', name: 'Max', age: 28 },
      { id: 'bwrtk', name: 'Manu', age: 29 },
      { id: 'ijhig', name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    //  DO NOT DO personsState: personsState.state.persons[0].name = "Maximillion";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // Alternative methos for spread operation above
    // const person = Object.assign({}, this.state.persons[personIndex])
    // this new method does makes a copuy of the old state and does not mutate the old state
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })

    // old method below that mutates the state
    //   this.setState({
    //     persons: [
    //       { name: 'Max', age: 28 },
    //       { name: event.target.value, age: 29 },
    //       { name: 'Stephanie', age: 26 }
    //     ]
    // });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); slice creates a copy of persons for manipulating
    const persons = [...this.state.persons]  // same as slice method above but more modern
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    // if doesShow is true it will set to false
    // if doesShow is flase it will set it to false
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      // backgroundColor: 'green',
      // color: 'white',
      // font: 'inherit',
      // border: '1px solid blue',
      // padding: '8px',
      // cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');  // clsses = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // clsses = ['red', 'bold']
    }



    // using the arrow function to onClick allows to pass arguments
    //hoever, the bind method is more efficient and may effect performance of larger apps
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!!!')); //Equivalent to the JSX code above
  }
}

export default App;

// =========================================================================
//  React Hooks way of creating components
// =========================================================================
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ]
//   });

//   const [otherState, setOtherState] = useState('some othe state')

//   console.log(personsState, otherState) // test how state worksd using React Hooks
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Maximillian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     });
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>personsState is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// }
// export default app;