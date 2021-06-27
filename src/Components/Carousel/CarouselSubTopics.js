import React from 'react'

import './Carousel.css'

const CarouselSubTopics = props => {
    return(
        <React.Fragment>
            <div className="detailsList">
                <div className="projectSubHeading">{props.subTitle}</div>
                {props.details.map(detail => (
                    <div className="projectDetail">{detail}</div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default CarouselSubTopics