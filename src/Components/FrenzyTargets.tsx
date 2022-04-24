import React, { useEffect, useState } from "react";
import {Howl} from 'howler';
import Target from "./Target";

interface IProps{
    mapSize:number;
    targetSize:number;
    gameStatus:boolean;
    setScore:React.Dispatch<React.SetStateAction<number>>;
}

const FrenzyTargets:React.FC<IProps> = ({setScore,mapSize,targetSize,gameStatus}) =>{

    const [posX,setPosX] = useState<number>();
    const [posY,setPosY] = useState<number>();
    const [frenzyTargets, setFrenzyTargets] = useState<JSX.Element[]>([])

    const hitTargetSound = new Howl({
        src: [require("../Sounds/hittarget.wav")],
        volume: 0.2
    })

    const randomizePosition = ():number =>{
        const maxPosition = mapSize - targetSize;
        const number = Math.floor(Math.random() * maxPosition);
        return number;
    }

    const handleClick = () =>{
        return () => {
            hitTargetSound.play();
            setScore(prevState => prevState + 1);
            setPosX(randomizePosition());
            setPosY(randomizePosition());
        }
    }

    // useEffect(()=>{
    //     const delay = setTimeout(() => {
    //         setFrenzyTargets(...(frenzyTargets ?? []), <Target/>);
    //       }, 500);
    //     return () => clearTimeout(delay);
    // })
    return (
        <div>
            <Target setScore = {setScore} mapSize={mapSize} targetSize={targetSize}/>
            <Target setScore = {setScore} mapSize={mapSize} targetSize={targetSize}/>
            {/* <div 
                className="target" 
                onClick ={handleClick()}
                style={{left:`${posX}vh`, top:`${posY}vh`, width:`${targetSize}vh`, height:`${targetSize}vh`}}>
            </div> */}
        </div>
    )
}

export default FrenzyTargets