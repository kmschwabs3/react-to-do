 import React, { Component } from 'react'; //imports React and React's Component Class

 class ToDo extends Component { //Defomes a Class that Extends Component
    render() { //Defines a render() method on your class
     return (  //this pulls in the desciption value from the array is apps.js into the list
       <li>
         <input type="checkbox" checked={ this.props.isCompleted } />
         <span>{ this.props.description }</span>
       </li>
     );
   }
 }

 export default ToDo;  