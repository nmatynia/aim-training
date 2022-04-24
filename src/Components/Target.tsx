import React, { useState } from 'react';
import {Howl, Howler} from 'howler';

interface IProps{
    mapSize:number;
    targetSize:number;
    setScore:React.Dispatch<React.SetStateAction<number>>;
}

const Target:React.FC<IProps> = ({setScore,mapSize,targetSize}) =>{
    
    const hitTargetSound = new Howl({
        src: [require("../Sounds/hittarget.wav")],
        volume: 0.2
    })

    const randomizePosition = ():number =>{
        const maxPosition = mapSize - targetSize;
        const number = Math.floor(Math.random() * maxPosition);
        return number;
    }

    const [posX,setPosX] = useState<number>(randomizePosition);
    const [posY,setPosY] = useState<number>(randomizePosition);

    const handleClick = () =>{
        return () => {
            hitTargetSound.play();
            setScore(prevState => prevState + 1);
            setPosX(randomizePosition());
            setPosY(randomizePosition());
        }
    }

    

    return (
        <div 
            className="target" 
            onClick ={handleClick()}
            style={{left:`${posX}vh`, top:`${posY}vh`, width:`${targetSize}vh`, height:`${targetSize}vh`}}>
        </div>
        )
}

export default Target;