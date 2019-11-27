import React from "react";
import "./ToggleButton.css";



const ToggleButton = ({toggleLanguage, checked}) => {
    return <label className="switch">
        <input checked={checked}  type="checkbox" onChange={({target: {checked}})=>toggleLanguage(checked)} />
        <span className="slider round"></span>
    </label>
}

export default ToggleButton;