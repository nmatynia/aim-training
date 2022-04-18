import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameArea from './Components/GameArea';

const App: React.FC = () =>{
  return (
    <div className="App">
        <h1 className ="appHeader">Aim Training</h1>
        <GameArea/>
        
    </div>
  );
}

export default App;
