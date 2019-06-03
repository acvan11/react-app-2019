import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { name: "Lee", age: 28 },
            { name: "Jane", age: 29 },
            { name: "John", age: 26 }
        ],
        otherState: "Some other value",
        showPersons: false
    };

    switchNameHandler = newName => {
        this.setState({
            persons: [
                { name: newName, age: 29 },
                { name: "Jane Jane", age: 30 },
                { name: "John John", age: 28 }
            ]
        });
    };

    nameChangeHandler = event => {
        this.setState({
            persons: [
                { name: "So Cool", age: 23 },
                { name: event.target.value, age: 22 },
                { name: "Very happy", age: 33 }
            ]
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {
        const style = {
            background: "white",
            font: "inherit",
            border: "1x solid red",
            cursor: "pointer",
            padding: "8px"
        };

        return (
            <div className="App">
                <h1>This is React App</h1>
                <p>Hello World</p>
                <button style={style} onClick={this.togglePersonsHandler}>
                    Switch Name
                </button>

                {this.state.showPersons === true ? 
                    <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                        />
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            click={this.switchNameHandler.bind(
                                this,
                                "Okay good"
                            )}
                            changed={this.nameChangeHandler}
                        >
                            My Hobbies: Racing
                        </Person>
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}
                        />
                    </div> : null
                 }
            </div>
        );
    }
}

export default App;
