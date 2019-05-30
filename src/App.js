import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name: 'Lee', age: 28 },
            { name: 'Jane', age: 29},
            { name: 'John', age: 26}
        ],
        otherState: 'Some other value'
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 29},
                { name: 'Jane Jane', age: 30},
                { name: 'John John', age: 28}
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'So Cool', age: 23},
                { name: event.target.value, age: 22},
                { name: 'Very happy', age:33 }
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>This is React App</h1>
                <p>Hello World</p>
                <button onClick={() => this.switchNameHandler('Alex Max')}>Switch Name</button>
                <Person 
                name= {this.state.persons[0].name}
                age= {this.state.persons[0].age} />
                <Person 
                name= {this.state.persons[1].name}
                age= {this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Okay good')}
                changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
                <Person 
                name = {this.state.persons[2].name}
                age= {this.state.persons[2].age}/>
            </div>
        )
    }
}

export default App