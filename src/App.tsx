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
  gameMode: string;
  frenzyDiff: string;
}

const useEventListener = (eventName:any, handler:any, element = window) => {
  const savedHandler = useRef<any>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event:React.KeyboardEvent<HTMLDivElement>) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

const App: React.FC = () =>{

  const [score,setScore] = useState<IState["score"]>(0);
  const [time,setTime] = useState<IState["time"]>(30); // initial value 30
  const [targetSize,setTargetSize] = useState<IState["targetSize"]>(5.336);// true initial value 5.336vh
  const [mapSize,setMapSize] = useState<IState["mapSize"]>(50);// true initial value 64vh
  const [gameStarting, setGameStarting] = useState<IState["gameStarting"]>(true); // responsible for startMenu display 
  const [gameStatus, setGameStatus] = useState<IState["gameStarting"]>(false); // responsible for true start button (centered target) display 
  const [gameMode,setGameMode] = useState<IState["gameMode"]>("classic");
  const [frenzyDiff, setFrenzyDiff] = useState<IState["frenzyDiff"]>("easy");

  console.log("Score: ",score)
  useEventListener("keydown",(event:any)=>{
    if (event.altKey && event.key === 'b') {
      setGameStatus(false)};
  })

  return (
    <div className="App">
        <h1 className ="appHeader">Aim Training</h1>
        <Nav 
          setTime={setTime} 
          setMapSize={setMapSize} 
          setTargetSize={setTargetSize} 
          time={time} 
          mapSize={mapSize} 
          targetSize={targetSize} 
          setGameStatus={setGameStatus} 
          gameMode ={gameMode}
          setGameMode={setGameMode}
          setFrenzyDiff={setFrenzyDiff}
          frenzyDiff ={frenzyDiff}
        />

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
          gameMode={gameMode}
          setFrenzyDiff={setFrenzyDiff}
          frenzyDiff ={frenzyDiff}
        />
        <footer className="footer">Norbert Matynia - <a className='github-link' href="https://github.com/nmatynia">github.com/nmatynia</a></footer>
    </div>
  );
}

export default App;
