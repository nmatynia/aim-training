import React,{useRef} from "react";
import "../Styles/GameArea.css";
import Timer from './Timer';
import {FaSyncAlt} from 'react-icons/fa';
import {Howl, Howler} from 'howler';
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
    const sound = new Howl({
        src: [require("../Sounds/hittarget.wav")],
        volume: 0.2
    })
    const randomizePosition = ():number =>{
        const maxPosition = mapSize - targetSize + 1;
        const number = Math.floor(Math.random() * maxPosition);
        return number;
    }

    const handleClick = () =>{
        return () => {
            sound.play()
            setScore(prevState => prevState + 1)
        }
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
                sound.play();
                setGameStatus(true); 
                setScore(1);
                missedClicks.current = 0;
            }}
            style={{left:`${(mapSize-targetSize)/2}vh`, top:`${(mapSize-targetSize)/2}vh`, width:`${targetSize}vh`, height:`${targetSize}vh`}}>
        </div>
    )

    
            
    const formattedTime:string = time > 59 ? `${Math.floor(time/60)}:${time%60 >=10 ? (time%60): `0${time%60}`}`  : (time >= 10 ? `0:${time}` : `0:0${time}`);

    const calculatedAccuracy = Math.round(score/(score+missedClicks.current)*100*100)/100;

    //if something doesnt work its because of this
    
    

    return (
        <div className="GameArea" style={{width:`${mapSize}vh`, height:`${mapSize}vh`}}> 

            {gameStarting ? gameStart : (gameStatus ? target : startingTarget)}

            <div className="accuracyCounter" onClick={()=>missedClicks.current = missedClicks.current + 1}></div>
            
            <div className="score">SCORE: {score}</div>
            {gameStarting || !gameStatus ? <div className="timer">{formattedTime}</div>:<Timer time={time} setScore={setScore} setGameStatus={setGameStatus}/>}
            {!gameStarting && !gameStatus ? <div className ="accuracy">ACCURACY: {!isNaN(calculatedAccuracy)?calculatedAccuracy:"0"}%</div>: null}
            
        </div>
    )
}

export default GameArea;