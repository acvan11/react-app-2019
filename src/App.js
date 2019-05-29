import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Andy', age: 29},
      { name: 'Leslie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Andy Andy';
    this.setState({
      persons: [
        { name: 'Max Max', age: 28 },
        { name: 'Andy', age: 29},
        { name: 'Leslie Leslie', age: 26}
      ],
     })
  }

  render() {
  return (
    <div className="App">  
      <h1>This is React app</h1>    
      <p>Hello world</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].name}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].name}> My Hobbie is racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].name}/>
    </div>
  );
  }
}

export default App;
