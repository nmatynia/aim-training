import React,{useState} from 'react';
import './App.css';
import GameArea from './Components/GameArea';
import Nav from './Components/Nav';

interface IState{
  score: number;
  time: number;
}

const App: React.FC = () =>{

  const [score,setScore] = useState<IState["score"]>(0)
  const [time,setTime] = useState<IState["time"]>(0)
  console.log("Score: ",score)
  return (
    <div className="App">
        <h1 className ="appHeader">Aim Training</h1>
        <Nav/>
        <GameArea setScore={setScore} score={score}/>
    </div>
  );
}

export default App;
