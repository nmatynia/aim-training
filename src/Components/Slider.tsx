import React from "react";
import '../Styles/Slider.css'

interface IProps{
    min:number;
    max:number;
    val:number;
    step?:number;
    set: React.Dispatch<React.SetStateAction<number>>;
}
const Slider:React.FC<IProps> = ({min,max,val,set,step}) =>{

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        set(e.target.valueAsNumber)
    }
    return (
        <input type="range" min={min} max={max} value={val} step={step} onChange={handleChange} className="slider"/>
    )
}

export default Slider;