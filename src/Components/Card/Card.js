import React from 'react'

import './Card.css'
import Image1 from '../../assets/images/gherkins-8.jpeg'

const Card = props => {

    const onClickHandler = () => {
        props.onClick(props.id)
        props.openDetails(true)
    }

    return(
        <div className={props.equipment ? "equipmentCardContainer" : "cardContainer"} id={props.id}>
            <button className="card" onClick={onClickHandler}>{props.title}</button>
        </div>
    )
}

export default Card