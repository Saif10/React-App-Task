import React from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.css';

function App(props) {

  return <div><h3>Task 1:</h3> <br></br>Hello World from {props.name} 
  <div><br></br><h3>Task 2:</h3> <br></br>
    Hello World  <strong>{props.name}</strong>
  </div>

  <div><br></br><h3>Task 3:</h3><br></br>
  <h1>Welcome To PIAIC</h1>
  <ol>
    <li>AI</li>
    <li>CNC</li>
    <li>IOT</li>


  </ol>
  <ul>
  <li>Block Chain</li>
    <li>Bootcamp 2020</li>
    
  </ul>
  </div>

  <div><h3>Task 4:</h3> <br></br>
    This is the added age using JSX : {props.age + 5}
  </div>
  <div><h3>Task 5:</h3>
  <p className="custom">This is the paragraph styled with CSS</p>
  
  </div>

  </div>
}


export default App;
