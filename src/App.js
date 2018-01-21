import React, { Component } from 'react';
import './App.css';
import BattleGround from './components/BattleGround/BattleGround'
import Parent from './playground/Parent'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BattleGround />
        {/* <Parent /> */}
      </div>
    );
  }
}

export default App;
