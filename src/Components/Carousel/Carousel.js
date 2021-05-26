import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './Carousel.css'

const Carousel = props => {
    return(
        <div className="detailsContainer" id={props.details.id}>
            <div className="detailsTitle">{props.details.name}</div>
            <div className="detailsList">
                {props.details.details.map(detail => (
                    <div className="listItem">
                        <div className="bulletContainer">
                            <FiberManualRecordIcon className="bullet"/>
                        </div>
                        <div className="listText">{detail}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel