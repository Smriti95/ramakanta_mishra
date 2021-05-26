import React from 'react'

import './List.css'

const List = (props) => {
    return(
        <div className="listContainer">
            <div className="index">{props.id}</div>
            <div className="text">{props.text}</div>
        </div>
    )
}

export default List