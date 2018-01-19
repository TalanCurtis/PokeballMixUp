import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='BattleGround'>
          <Card />
          <div className='MidContent'>
            <button className='StartButton'>Start</button>
          </div>
          <Card />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
