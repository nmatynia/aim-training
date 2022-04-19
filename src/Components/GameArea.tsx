import React from "react";
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
}

const GameArea: React.FC<IProps> = ({setScore,score,targetSize,mapSize,time, gameStarting,setGameStarting}) =>{
    const randomizePosition = ():number =>{
        const maxPosition = mapSize - targetSize + 1;
        const number = Math.floor(Math.random() * maxPosition);
        console.log(number);
        return number;
    }

    const handleClick = () =>{
        return ()=> setScore(prevState => prevState + 1)
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
    return (
        <div className="GameArea" style={{width:`${mapSize}vh`, height:`${mapSize}vh`}}>

            {gameStarting ? gameStart : target}

            <div className="score">SCORE: {score}</div>
            {gameStarting?<div className="timer">0:{time}</div>:<Timer time={time} setScore={setScore}/>}
            
        </div>
    )
}

export default GameArea;