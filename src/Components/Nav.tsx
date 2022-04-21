import React from "react";
import '../Styles/Nav.css'
import NavItem from "./NavItem";
import DropdownMenu,{DropdownItem} from "./DropdownMenu";

const Nav:React.FC = () =>{
    return(
        <div className="Nav">
            <NavItem text="MODES">
                <DropdownMenu name="modes"> 
                    <DropdownItem>CLASSIC</DropdownItem>
                    <DropdownItem>FRENZY</DropdownItem> 
                </DropdownMenu>
            </NavItem>

            <NavItem text="CUSTOMIZE">
                <DropdownMenu name="customize"> 
                    <DropdownItem>MAP SIZE: -----o-----</DropdownItem>
                    <DropdownItem>TARGET SIZE: -----o-----</DropdownItem> 
                    <DropdownItem>GAME TIME: -----o-----</DropdownItem>
                    <DropdownItem>GAME TIME: -----o-----</DropdownItem>
                    <DropdownItem>CIRCLE / SQUARE</DropdownItem>
                </DropdownMenu>
            </NavItem>
            <NavItem text="DIFFICULTY">
                <DropdownMenu name="difficulty"> 
                    <DropdownItem>EASY</DropdownItem>
                    <DropdownItem>NORMAL</DropdownItem> 
                    <DropdownItem>HARDCORE</DropdownItem> 
                </DropdownMenu>
            </NavItem>
            <NavItem text="ABOUT">
                <DropdownMenu name="about"> 
                    <DropdownItem>
                        If you want to be good
                        in FPS games this is the perfect place for you
                        Happy aiming!
                    </DropdownItem>
                    <DropdownItem>
                        Made by Norbert Matynia
                    </DropdownItem>
                </DropdownMenu>
            </NavItem>
        </div>
    )
}

export default Nav;
