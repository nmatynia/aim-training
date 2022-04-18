import React from "react";
import "../Styles/GameArea.css";

interface IProps{
    score:number
    setScore:React.Dispatch<React.SetStateAction<number>>
}

const GameArea: React.FC<IProps> = ({setScore,score}) =>{
    const randomizePosition = ():number =>{
        const number = Math.floor(Math.random() * 59);
        console.log(number);
        return number;
    }

    const handleClick = () =>{
        return ()=> setScore(prevState => prevState + 1)
    }
    return (
        <div className="GameArea">
            <div onClick ={handleClick()}className="target" style={{left:`${randomizePosition()}vh`, top:`${randomizePosition()}vh`}}></div>
            <div className="score">Score: {score}</div>
        </div>
    )
}

export default GameArea;