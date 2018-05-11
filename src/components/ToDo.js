 import React, { Component } from 'react'; //imports React and React's Component Class

 class ToDo extends Component { //Defomes a Class that Extends Component
    render() { //Defines a render() method on your class
     return (  //this pulls in the desciption value from the array is apps.js into the list. Toggle Complete is the event listener now connected to the App.js data.
       <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={this.props.toggleComplete} />
         <span>{ this.props.description }</span>
          <button onClick={() => this.props.deleteToDo()}>Delete Task</button>
       </li>
     );
   }
 }

 export default ToDo;  