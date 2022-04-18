import React from "react";
import '../Styles/Nav.css'
const Nav:React.FC = () =>{
    return(
        <div className="Nav">
            <button>MODES</button>
            <button>MAP SIZE</button>
            <button>DIFFICULTY</button>
            <button>ABOUT</button>
        </div>
    )
}

export default Nav;
