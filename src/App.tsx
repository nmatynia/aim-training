import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameArea from './Components/GameArea';
import Nav from './Components/Nav';
const App: React.FC = () =>{
  return (
    <div className="App">
        <h1 className ="appHeader">Aim Training</h1>
        <Nav/>
        <GameArea/>
        
    </div>
  );
}

export default App;
