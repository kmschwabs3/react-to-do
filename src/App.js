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
     	],
        newTodoDescription: ''     	
     };
   }

   handleChange(e) {
     this.setState({ newTodoDescription: e.target.value })
   }
   
   handleSubmit(e) {
     e.preventDefault();
     //console.log('handleSubmit called');
     if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
   }

   toggleComplete(index) {
   	//console.log(index);
   	const todos= this.state.todos.slice();//modifies array item withour modifying state of object
   	const todo=todos[index];
   	todo.isCompleted = todo.isCompleted ? false : true; //ternary opperator is used to evaluate value based on whether box is checked
   	this.setState({todos : todos});//sets the new state in the component
   }

   render() {
    return (
      <div className="App">
         <ul>
         	{this.state.todos.map((todo, index) => //ES6 arrow function here calls the state above and iterates through the array
         		<ToDo key={index} description={todo.description} toggleComplete={todo.isCompleted} toggleComplete={() => this.toggleComplete(index)}/> //with toggleComplete, this now can pass in the updated value appropriate item in the array
         		)}
        </ul>
       	   <form onSubmit={ (e) => this.handleSubmit(e) }>
           <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
           <input type="submit" />
         </form>

      </div>
    );
  }
}

export default App;
