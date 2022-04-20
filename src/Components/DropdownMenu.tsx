import React from "react";
import '../Styles/DropdownMenu.css';
const DropdownMenu:React.FC = () =>{

    interface IProps{
        children: React.ReactNode
    }

    //this took forever to figure out in typescript 
    const DropdownItem = ({children}:IProps) =>{
        return(
            <div className="menuItem">
                {children}
            </div>
        );
    }
    return (
        <div className="dropdown">
            <DropdownItem>Classic</DropdownItem>
            <DropdownItem>Frenzy</DropdownItem>
        </div>
    )
}

export default DropdownMenu;