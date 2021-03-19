import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hi, I am a React App</h1>  
      <Person name="Max" age="24"/>
      <Person name="Manu" age="27"/>
      <Person name="Steph" age="22"/>
      </div>
    );
    // const child = React.createElement('h1',null,'Hi, I\'m a React App');
    // return React.createElement('div',{className: 'App'}, child);
  }
}

export default App;
