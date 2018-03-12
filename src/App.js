import React, { Component } from 'react';
import logo from './logo.svg';
import Classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={Classes.App}>
        <header className={Classes.App_header}>
          <img src={logo} className={Classes.App_logo} alt="logo" />
          <h1 className="App-title">Welcome to the burger builder</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
