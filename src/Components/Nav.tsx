import React from "react";
import '../Styles/Nav.css'
import NavItem from "./NavItem";
import DropdownMenu,{DropdownItem} from "./DropdownMenu";
import Slider from "./Slider";
interface IProps{
    time:number;
    mapSize:number;
    targetSize:number;
    frenzyDiff:string;
    gameMode:string;
    setTime:React.Dispatch<React.SetStateAction<number>>;
    setMapSize: React.Dispatch<React.SetStateAction<number>>;
    setTargetSize:React.Dispatch<React.SetStateAction<number>>;
    setGameStatus:React.Dispatch<React.SetStateAction<boolean>>;
    setGameMode: React.Dispatch<React.SetStateAction<string>>;
    setFrenzyDiff: React.Dispatch<React.SetStateAction<string>>;
}
const Nav:React.FC<IProps> = ({setTime,setMapSize,setTargetSize,time,mapSize,targetSize,setGameStatus,setGameMode,setFrenzyDiff,gameMode,frenzyDiff }) =>{
    return(
        <div className="Nav">
            <NavItem text="MODES" setGameStatus={setGameStatus}>
                <DropdownMenu name="modes">
                    <DropdownItem><span id={gameMode === "classic" ? "gamemodeSelected" : undefined} onClick={() => setGameMode("classic")}>CLASSIC</span></DropdownItem>
                    <DropdownItem><span id={gameMode === "frenzy" ? "gamemodeSelected" : undefined} onClick={() => setGameMode("frenzy")}>FRENZY</span></DropdownItem>
                    <DropdownItem><span id={gameMode === "trio" ? "gamemodeSelected" : undefined} onClick={() => setGameMode("trio")}>TRIO</span></DropdownItem>
                </DropdownMenu>
            </NavItem>

            <NavItem text="CUSTOMIZE" setGameStatus={setGameStatus}>
                <DropdownMenu name="customize">
                    <DropdownItem>MAP SIZE: <Slider min={32} max={67} val={mapSize} set={setMapSize}/></DropdownItem>
                    <DropdownItem>TARGET SIZE: <Slider min={1} max={12} val={targetSize} set={setTargetSize}/></DropdownItem> 
                    <DropdownItem>GAME TIME:<Slider min={10} max={300} val={time} set={setTime} step={10}/> </DropdownItem>
                </DropdownMenu>
            </NavItem>
            <NavItem text="DIFFICULTY" setGameStatus={setGameStatus}>
                <DropdownMenu name="difficulty">
                    <DropdownItem><span id={frenzyDiff === "easy" ? "diffSelected" : undefined} onClick={()=> setFrenzyDiff("easy")}>EASY</span></DropdownItem>
                    <DropdownItem><span id={frenzyDiff  === "normal" ? "diffSelected" : undefined} onClick={()=> setFrenzyDiff("normal")}>NORMAL</span></DropdownItem> 
                    <DropdownItem><span id={frenzyDiff  === "hardcore" ? "diffSelected" : undefined} onClick={()=> setFrenzyDiff("hardcore")}>HARDCORE</span></DropdownItem> 
                </DropdownMenu>
            </NavItem>
            <NavItem text="ABOUT" setGameStatus={setGameStatus}>
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
