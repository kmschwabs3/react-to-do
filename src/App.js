import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'; //imports the class from the todo.js file and can use the to do in the class as the HTML element

class App extends Component {
  render() {
    return (
      <div className="App">
         <ul>
          <ToDo />
          <ToDo />
        </ul>    
      </div>
    );
  }
}

export default App;
