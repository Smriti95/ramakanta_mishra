import React from 'react'

import './Button.css'

const Button = (props) => {
    return(
        <div className="buttonContainer">
            <button className={props.style} onClick={() => props.onClick(props.path)}>{props.title}</button>
        </div>
    )
}

export default Button