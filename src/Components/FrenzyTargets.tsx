import React, { useEffect, useState } from "react";
import {Howl} from 'howler';
import FrenzyTarget from './FrenzyTarget'
interface IProps{
    mapSize:number;
    targetSize:number;
    gameStatus:boolean;
    setGameStatus:React.Dispatch<React.SetStateAction<boolean>>;
    setScore:React.Dispatch<React.SetStateAction<number>>;
}


const FrenzyTargets:React.FC<IProps> = ({setScore,mapSize,targetSize,gameStatus,setGameStatus}) =>{

    const [posX,setPosX] = useState<number>();
    const [posY,setPosY] = useState<number>();
    const [frenzyTargets, setFrenzyTargets] = useState<boolean []>([])
    const [targetsCounter,setTargetsCounter] = useState<number>(0);

    const hitTargetSound = new Howl({
        src: [require("../Sounds/hittarget.wav")],
        volume: 0.2
    })

    const endGameSound = new Howl({
        src: [require("../Sounds/end.wav")],
        volume:0.02
    })

    const randomizePosition = ():number =>{
        const maxPosition = mapSize - targetSize;
        const number = Math.floor(Math.random() * maxPosition);
        return number;
    }

    // const handleClick = (e:any) =>{
    //     return (e:any) => {
    //         hitTargetSound.play();
    //         setScore(prevState => prevState + 1);
    //         setPosX(randomizePosition());
    //         setPosY(randomizePosition());
    //         console.log(e)
    //         setFrenzyTargets([...frenzyTargets.filter((target,idx)=>{
    //             return idx !== e.target.key
    //         })])
    //     }
    // }

    useEffect(() => {
        const myInterval = () => {
            if(frenzyTargets.length<5){
                setFrenzyTargets([...frenzyTargets,true])
                setTargetsCounter(prev=> prev+1)
            }
            else if(frenzyTargets.length>=5){
                endGameSound.play()
                setTargetsCounter(-1);
                setGameStatus(false)
                clearInterval(interval);
            }
        }
        const interval = setInterval(myInterval, 500);
        return () => {
          clearInterval(interval)
        }
      }, [targetsCounter]);

    return (
        <div>
            {frenzyTargets.map((target,idx) =>{
                return (
                   <FrenzyTarget setScore = {setScore} mapSize ={mapSize} targetSize ={targetSize} setFrenzyTargets={setFrenzyTargets} frenzyTargets={frenzyTargets} setTargetsCounter={setTargetsCounter}/>
                )
            })}
        </div>
    )
}

export default FrenzyTargets