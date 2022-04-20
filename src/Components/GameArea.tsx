import React,{useState, useRef} from "react";
import "../Styles/GameArea.css";
import Timer from './Timer'
import {FaSyncAlt} from 'react-icons/fa'

interface IProps{
    score:number
    targetSize:number
    mapSize: number;
    time: number;
    setScore:React.Dispatch<React.SetStateAction<number>>;
    gameStarting: boolean;
    setGameStarting: React.Dispatch<React.SetStateAction<boolean>>
    gameStatus: boolean
    setGameStatus: React.Dispatch<React.SetStateAction<boolean>>
}

const GameArea: React.FC<IProps> = ({setScore,score,targetSize,mapSize,time, gameStarting,setGameStarting,gameStatus,setGameStatus}) =>{

    const missedClicks = useRef(0);
    const [sessionBest, setSessionBest] = useState<number>(0);

    const randomizePosition = ():number =>{
        const maxPosition = mapSize - targetSize + 1;
        const number = Math.floor(Math.random() * maxPosition);
        console.log(number);
        return number;
    }

    const handleClick = () =>{
        return () => setScore(prevState => prevState + 1)
    }

    const gameStart: JSX.Element = (
    <div 
        className ='gameStart' 
        style={{left:`${(mapSize-30.9498)/2}vh`, top:`${(mapSize-7.7908)/2}vh`}}>
            
            <div className ='startButton' onClick={()=>setGameStarting(false)}>START</div>
            <div className ='tip'><FaSyncAlt/>click alt + b for restart</div>
    </div>
    )
    
    const target: JSX.Element = (
        <div 
            className="target" 
            onClick ={handleClick()}
            style={{left:`${randomizePosition()}vh`, top:`${randomizePosition()}vh`, width:`${targetSize}vh`, height:`${targetSize}vh`}}>
        </div>
    )

    const startingTarget: JSX.Element = (
        <div 
            className="target" 
            onClick ={() => {
                setGameStatus(true); 
                setScore(0);
                missedClicks.current = 0;
            }}
            style={{left:`${(mapSize-targetSize)/2}vh`, top:`${(mapSize-targetSize)/2}vh`, width:`${targetSize}vh`, height:`${targetSize}vh`}}>
        </div>
    )

    
            
    const formattedTime = time > 59 ? `${time/60}:${time%60}`  : (time > 10 ? `0:${time}` : `0:0${time}`);

    const calculatedAccuracy = Math.round(score/(score+missedClicks.current)*100*100)/100;

    
    const sessionBestPrecent = ():JSX.Element | null =>{
        const precent = Math.round(((score/sessionBest*100)-100)*100)/100;
        return precent < 0 ? <span style={{color:"rgba(255, 0, 0, 0.29)"}}>({precent}%)</span> :( precent !== 0 ? <span style={{color:"#A2EEA5"}}>(+{precent}%)</span>:null)
    } 

    //if something doesnt work its because of this
    if(!gameStatus && sessionBest<score){
        setSessionBest(score);
    }
    

    return (
        <div className="GameArea" style={{width:`${mapSize}vh`, height:`${mapSize}vh`}}>

            {gameStarting ? gameStart : (gameStatus ? target : startingTarget)}

            <div className="accuracyCounter" onClick={()=>missedClicks.current = missedClicks.current + 1}></div>
            
            <div className="score">SCORE: {score}</div>
            {gameStarting || !gameStatus ? <div className="timer">{formattedTime}</div>:<Timer time={time} setScore={setScore} setGameStatus={setGameStatus}/>}
            {!gameStarting && !gameStatus ? <div className ="accuracy">ACCURACY: {calculatedAccuracy}%</div>: null}
            {!gameStarting && !gameStatus ? <div className ="sessionBest">SESSION BEST: {sessionBest} {sessionBestPrecent()}</div>: null}
            
        </div>
    )
}

export default GameArea;