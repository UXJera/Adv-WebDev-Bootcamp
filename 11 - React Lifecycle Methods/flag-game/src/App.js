import React, { Component } from 'react';
import CountryGame from './Components/CountryGame/CountryGame';
import worldImg from './world.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="flag-app">
        <header
          className="title-header"
          style={{backgroundImage: `url(${worldImg})`}}>
          <h1 className="title-text">Guess the Flag</h1>
        </header>
        <CountryGame />
      </div>
    );
  }
}
//<CountryGame />
export default App;
