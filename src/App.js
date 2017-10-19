import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './chess-board/Board'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my React DnD Tutorial</h1>
        </header>
        <p className="App-intro">
          Play around with the drag and drop functionality I built
        </p>
        <Board knightPosition={this.props.knightPosition} />
      </div>
    );
  }
}

export default App;
