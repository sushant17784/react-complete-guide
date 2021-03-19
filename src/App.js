import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props =>{
const [personsState,setPersonsState]= useState({
  persons:[
    {name:'Max', age:24},
    {name:'Manu',age:27},
    {name: 'Steph', age:22}
  ]
});

const [otherState, setOtherState] =  useState('frodo');

const switchnamehandler = () =>{
  setPersonsState(
    { persons:[
      {name:'Sushant', age:37},
      {name:'Manu',age:27},
      {name: 'Steph', age:23}
    ]
  
    }
  );
  }
  
    return (
      <div className="App">
      <h1>Hi, I am a React App</h1>  
      <button onClick={switchnamehandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies : Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
   
  
}

export default App;


