import React, { Component } from 'react';
import Button from './Button';
import Title from './Title';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title title="가위 바위 보 게임" />
        <Button />
      </div>
    );
  }
}

export default App;
