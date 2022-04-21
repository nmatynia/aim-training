import React,{useEffect, useState, useRef} from 'react';
import './App.css';
import GameArea from './Components/GameArea';
import Nav from './Components/Nav';

interface IState{
  score: number;
  time: number;
  targetSize: number;
  mapSize: number;
  gameStarting: boolean;
  gameStatus: boolean;
}

const App: React.FC = () =>{

  const [score,setScore] = useState<IState["score"]>(0);
  const [time,setTime] = useState<IState["time"]>(5); // initial value 30
  const [targetSize,setTargetSize] = useState<IState["targetSize"]>(5.336);// true initial value 5.336vh
  const [mapSize,setMapSize] = useState<IState["mapSize"]>(50);// true initial value 64vh
  const [gameStarting, setGameStarting] = useState<IState["gameStarting"]>(true) // responsible for startMenu display 
  const [gameStatus, setGameStatus] = useState<IState["gameStarting"]>(false) // responsible for true start button (centered target) display 

  console.log("Score: ",score)

  return (
    <div className="App">
        <h1 className ="appHeader">Aim Training</h1>
        <Nav setTime={setTime} setMapSize={setMapSize} setTargetSize={setTargetSize} time={time} mapSize={mapSize} targetSize={targetSize} setGameStatus={setGameStatus}/>
        <GameArea 
          setScore={setScore} 
          score={score} 
          targetSize={targetSize} 
          mapSize={mapSize} 
          time={time}
          gameStarting={gameStarting}
          setGameStarting={setGameStarting}
          gameStatus = {gameStatus}
          setGameStatus = {setGameStatus}
        />
        <footer className="footer">Norbert Matynia - <a className='github-link' href="https://github.com/nmatynia">github.com/nmatynia</a></footer>
    </div>
  );
}

export default App;
