import React, { useEffect, useState } from "react";
import { setSourceMapRange } from "typescript";
import '../Styles/GameArea.css'
interface IProps{
    time: number;
    setScore:React.Dispatch<React.SetStateAction<number>>;
}
const Timer:React.FC<IProps> =({time,setScore}) =>{
    const [counter,setCounter] = useState<IProps["time"]>(time);
    
    useEffect(() => {
        const myInterval = () => {
          if (counter >= 1) {
            setCounter(state => state - 1)
          } else if (counter < 1){
            setCounter(time);
            setScore(0)
            clearInterval(interval);
          }
        }
        const interval = setInterval(myInterval, 1000);
        return () => {
          clearInterval(interval)
        }
      }, [counter]);

    return(
        <div className='timer'>
            0:{counter}
        </div>
    )
}

export default Timer;
