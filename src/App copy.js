import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:'Max', age:24},
      {name:'Manu',age:27},
      {name: 'Steph', age:22}
    ],
    otheval : 'frodo'
  }

switchnamehandler = () =>{
  this.setState(
    { persons:[
      {name:'Sushant', age:37},
      {name:'Manu',age:27},
      {name: 'Steph', age:22}
    ]

    }
  );
}

  render() {
    return (
      <div className="App">
      <h1>Hi, I am a React App</h1>  
      <button onClick={this.switchnamehandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies : Racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // const child = React.createElement('h1',null,'Hi, I\'m a React App');
    // return React.createElement('div',{className: 'App'}, child);
  }
}

export default App;

