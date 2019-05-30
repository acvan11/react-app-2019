import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Andy', age: 29},
      { name: 'Leslie', age: 26}
    ],
    otherState: 'hello'
  });

  console.log('personsState =', personsState);

  const [otherState, setOtherSate] = useState('some thing fun')
  console.log('personsState = ' ,personsState)
  console.log('otherState = ', otherState)
  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Andy Andy';
    setPersonsState({
      persons: [
        { name: 'Max Max', age: 28 },
        { name: 'Andy', age: 29},
        { name: 'Leslie Leslie', age: 26}
      ],

      // if we don't do this, personsState doesn't have otherState anymore
      otherState: personsState.otherState 
     });
  };


  return (
    <div className="App">  
      <h1>This is React app</h1>    
      <p>Hello world</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].name}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].name}> My Hobbie is racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].name}/>
    </div>
  );
};

export default App;



