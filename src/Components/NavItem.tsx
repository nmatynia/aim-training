import React,{useEffect, useRef, useState} from 'react';
import { isPropertySignature } from 'typescript';
import '../Styles/NavItem.css'

interface IProps{
    text: string
    children: React.ReactNode
    setGameStatus:React.Dispatch<React.SetStateAction<boolean>>;
}
const NavItem:React.FC<IProps> = ({text,children,setGameStatus}) =>{

    const [open, setOpen] = useState<boolean>(false);
    const dropDownRef = useRef<any>();

    //closes on clicking outside
    useEffect(()=>{
        const closeDropdown = (e:any) =>{
            if(!dropDownRef.current.contains(e.target)){
                setOpen(false)
            }
        }
        document.body.addEventListener('mousedown',closeDropdown);

        return () => document.body.removeEventListener('mousedown',closeDropdown)
    })

    return(
        <div ref={dropDownRef} className={`navItem`} onClick={()=>setGameStatus(false)}>
            
            <span className = 'dropButton' onClick={() => setOpen(!open)}>
                {text} 
            </span>
                
                
            {open && <div className={`dropButtonOpened ${text.toLowerCase()}`} onClick={() => setOpen(!open)}>{text}</div>}
            {open && children}
        </div>
    )
}

export default NavItem;