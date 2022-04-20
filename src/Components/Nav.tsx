import React from "react";
import '../Styles/Nav.css'
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";

const Nav:React.FC = () =>{
    return(
        <div className="Nav">
            <NavItem text="MODES">
                <DropdownMenu/>
            </NavItem>
            
            <NavItem text="CUSTOMIZE">
                <DropdownMenu/>
            </NavItem>
            <NavItem text="DIFFICULTY">

            </NavItem>
            <NavItem text="ABOUT">

            </NavItem>
        </div>
    )
}

export default Nav;
