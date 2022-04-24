import React, { useEffect, useState } from "react";
import {Howl} from 'howler';
import Target from "./Target";

interface IProps{
    mapSize:number;
    targetSize:number;
    gameStatus:boolean;
    setScore:React.Dispatch<React.SetStateAction<number>>;
}

const Trio:React.FC<IProps> = ({setScore,mapSize,targetSize,gameStatus}) =>{

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

    return (
        <div>
            <Target setScore = {setScore} mapSize={mapSize} targetSize={targetSize}/>
            <Target setScore = {setScore} mapSize={mapSize} targetSize={targetSize}/>
            <Target setScore = {setScore} mapSize={mapSize} targetSize={targetSize}/>
        </div>
    )
}

export default Trio;