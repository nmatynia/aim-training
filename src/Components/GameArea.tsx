import React from "react";
import "../Styles/GameArea.css";

interface IProps{
    score:number
    targetSize:number
    mapSize: number;
    setScore:React.Dispatch<React.SetStateAction<number>>
}

const GameArea: React.FC<IProps> = ({setScore,score,targetSize,mapSize}) =>{
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
            <div 
                className="target" 
                onClick ={handleClick()}
                style={{left:`${randomizePosition()}vh`, top:`${randomizePosition()}vh`, width:`${targetSize}vh`, height:`${targetSize}vh`}}>
            </div>

            <div className="score">Score: {score}</div>
        </div>
    )
}

export default GameArea;