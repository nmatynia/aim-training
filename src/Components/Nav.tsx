import React from "react";
import '../Styles/Nav.css'
import NavItem from "./NavItem";
import DropdownMenu,{DropdownItem} from "./DropdownMenu";
import Slider from "./Slider";
interface IProps{
    time:number;
    mapSize:number;
    targetSize:number;
    setTime:React.Dispatch<React.SetStateAction<number>>;
    setMapSize: React.Dispatch<React.SetStateAction<number>>;
    setTargetSize:React.Dispatch<React.SetStateAction<number>>;
}
const Nav:React.FC<IProps> = ({setTime,setMapSize,setTargetSize,time,mapSize,targetSize}) =>{
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
                    <DropdownItem>MAP SIZE: <Slider min={32} max={67} val={mapSize} set={setMapSize}/></DropdownItem>
                    <DropdownItem>TARGET SIZE: <Slider min={1} max={12} val={targetSize} set={setTargetSize}/></DropdownItem> 
                    <DropdownItem>GAME TIME:<Slider min={10} max={300} val={time} set={setTime} step={10}/> </DropdownItem>
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
