import React,{useEffect, useState, useRef} from 'react';
import './App.css';
import GameArea from './Components/GameArea';
import Nav from './Components/Nav';

interface IState{
  score: number;
  time: number;
  targetSize: number;
  mapSize: number;
}

const App: React.FC = () =>{

  const [score,setScore] = useState<IState["score"]>(0);
  const [time,setTime] = useState<IState["time"]>(5);
  const [targetSize,setTargetSize] = useState<IState["targetSize"]>(5.336);// 5.336vh
  const [mapSize,setMapSize] = useState<IState["mapSize"]>(50);// 64vh

  console.log("Score: ",score)

  return (
    <div className="App">
        <h1 className ="appHeader">Aim Training</h1>
        <Nav/>
        <GameArea setScore={setScore} score={score} targetSize={targetSize} mapSize={mapSize} time={time}/>
        <footer className="footer">Norbert Matynia - <a className='github-link' href="https://github.com/nmatynia">github.com/nmatynia</a></footer>
    </div>
  );
}

export default App;
