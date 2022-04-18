import React from "react";
import "../Styles/GameArea.css";

const GameArea: React.FC = () =>{
    return (
        <div className="GameArea">
            <div className="target" style={{left:"0px"}}></div>
        </div>
    )
}

export default GameArea;