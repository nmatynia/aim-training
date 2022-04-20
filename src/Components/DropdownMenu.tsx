import React from "react";
import '../Styles/DropdownMenu.css';

interface IProps{
    name:string
    children: React.ReactNode
}

const DropdownMenu:React.FC<IProps> = ({children,name}) =>{ 
    return (
        <div className={`dropdown-${name}`}>
            {children}
        </div>
    )
}

interface IPropsItem{
    children: React.ReactNode
}
//this took forever to figure out in typescript 
export const DropdownItem = ({children}:IPropsItem) =>{
    return(
        //menuItem-${children?.toString().toLowerCase()}
        <div className={`menuItem`}>
            {children}
        </div>
    );
}

export default DropdownMenu;