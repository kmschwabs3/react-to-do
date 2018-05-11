import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'; //imports the class from the todo.js file and can use the to do in the class as the HTML element

class App extends Component {
    constructor(props) {//inital state is identified within this method
     super(props);//calls the parent's constructor function
     this.state = {//expected to be an object 
     	todos: [//this is my array with properties/keys and unique values
     	{description: "Feed kitty", isCompleted: true},
     	{description: "Go grocery shopping", isCompleted: false},
     	{description: "Read a book", isCompleted: false},
     	{description: "Go for a bike ride", isCompleted: true},
     	{description: "Clean bedroom", isCompleted: false}
     	]
     };
   }
   
  render() {
    return (
      <div className="App">
         <ul>
         	{this.state.todos.map((todo, index) => //ES6 arrow function here calls the state above and iterates through the array
         		<ToDo key={index} description={todo.description} isCompleted={todo.isCompleted}/>
         		)}
        </ul>    
      </div>
    );
  }
}

export default App;
