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
}

const GameArea: React.FC<IProps> = ({setScore,score,targetSize,mapSize,time}) =>{
    const randomizePosition = ():number =>{
        const maxPosition = mapSize - targetSize + 1;
        const number = Math.floor(Math.random() * maxPosition);
        console.log(number);
        return number;
    }

    const handleClick = () =>{
        return ()=> setScore(prevState => prevState + 1)
    }
    return (
        <div className="GameArea" style={{width:`${mapSize}vh`, height:`${mapSize}vh`}}>

            <div className ='gameStart' style={{left:`${(mapSize-30.9498)/2}vh`, top:`${(mapSize-7.7908)/2}vh`}}>
                <div className ='startButton'>START</div>
                <div className ='tip'><FaSyncAlt/>click alt + b for restart</div>
            </div>

            <div 
                className="target" 
                onClick ={handleClick()}
                style={{left:`${randomizePosition()}vh`, top:`${randomizePosition()}vh`, width:`${targetSize}vh`, height:`${targetSize}vh`}}>
            </div>

            <div className="score">SCORE: {score}</div>
            <Timer time={time} setScore={setScore}/>
            
        </div>
    )
}

export default GameArea;