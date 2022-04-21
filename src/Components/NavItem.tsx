import React,{useState} from 'react';
import { isPropertySignature } from 'typescript';
import '../Styles/NavItem.css'

interface IProps{
    text: string
    children: React.ReactNode
}
const NavItem:React.FC<IProps> = ({text,children}) =>{

    const [open, setOpen] = useState<boolean>(false);

    return(
        <div className={`navItem ${open?" dropButtonOpened":""}`} >
            <span className = {`dropButton${open?" dropButtonOpened":""}`} onClick={() => setOpen(!open)}>
                {text} 
            </span>

            {open && children}
        </div>
    )
}

export default NavItem;