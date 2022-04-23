import React, { useEffect, useState } from "react";
import '../Styles/GameArea.css'
import {Howl} from 'howler';

interface IProps{
    time: number;
    setScore:React.Dispatch<React.SetStateAction<number>>;
    setGameStatus:React.Dispatch<React.SetStateAction<boolean>>;
}
const Timer:React.FC<IProps> =({time,setScore,setGameStatus}) =>{
    const [counter,setCounter] = useState<IProps["time"]>(time);
    const endGameSound = new Howl({
      src: [require("../Sounds/end.wav")],
      volume:0.02
  })
    useEffect(() => {
        const myInterval = () => {
          if (counter >= 1) {
            setCounter(state => state - 1)
          } else if (counter < 1){
            endGameSound.play()
            setCounter(time);
            setGameStatus(false);
            clearInterval(interval);
          }
        }
        const interval = setInterval(myInterval, 1000);
        return () => {
          clearInterval(interval)
        }
      }, [counter]);
      
      const formattedCounter:string  = counter > 59 ? `${Math.floor(counter/60)}:${counter%60 >= 10 ? counter%60: `0${counter%60}`}`  : (counter >= 10 ? `0:${counter}` : `0:0${counter}`);

    return(
        <div className='timer'>
            {formattedCounter}
        </div>
    )
}

export default Timer;
