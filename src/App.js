import React, { Component } from 'react';
import './App.css';
import {SignIn} from './SignIn'
import {SloganContainer} from './Slogan'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignIn/>
        <SloganContainer/>
      </div>
    );
  }
}

export default App;
