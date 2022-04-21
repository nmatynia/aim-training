import React,{useState} from 'react';
import { isPropertySignature } from 'typescript';
import '../Styles/NavItem.css'

interface IProps{
    text: string
    children: React.ReactNode
    setGameStatus:React.Dispatch<React.SetStateAction<boolean>>;
}
const NavItem:React.FC<IProps> = ({text,children,setGameStatus}) =>{

    const [open, setOpen] = useState<boolean>(false);

    return(
        <div className={`navItem ${open?" dropButtonOpened":""}`} onClick={()=>setGameStatus(false)}>
            <span className = {`dropButton${open?" dropButtonOpened":""}`} onClick={() => setOpen(!open)}>
                {text} 
            </span>

            {open && children}
        </div>
    )
}

export default NavItem;