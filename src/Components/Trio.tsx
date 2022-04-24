import React from "react";
import Target from "./Target";

interface IProps{
    mapSize:number;
    targetSize:number;
    gameStatus:boolean;
    setScore:React.Dispatch<React.SetStateAction<number>>;
}

const Trio:React.FC<IProps> = ({setScore,mapSize,targetSize,gameStatus}) =>{

    return (
        <div>
            <Target setScore = {setScore} mapSize={mapSize} targetSize={targetSize}/>
            <Target setScore = {setScore} mapSize={mapSize} targetSize={targetSize}/>
            <Target setScore = {setScore} mapSize={mapSize} targetSize={targetSize}/>
        </div>
    )
}

export default Trio;