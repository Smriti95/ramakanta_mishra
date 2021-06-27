import React from 'react'

import './Carousel.css'
import Cans from '../../assets/images/cans.jpg'
import Chocolate from '../../assets/images/chocolate.jpg'
import Juice from '../../assets/images/juice.jpg'
import Ketchup from '../../assets/images/ketchup.jpg'
import Paste from '../../assets/images/paste.jpg'
import Pickle from '../../assets/images/pickle.jpg'
import Tea from '../../assets/images/tea.jpg'
import ReadyToEat from '../../assets/images/readytoeat.jpg'
import TuttiFruity from '../../assets/images/tuttifruity.jpg'
import CarouselSubTopics from './CarouselSubTopics'
import { projectDetailSubheading } from '../../utils/constants'

const Carousel = props => {

    const [image, setImage] = React.useState("")

    React.useEffect(() => {
        switch (props.details.id) {
            case 1: return setImage(ReadyToEat);
                case 2: return setImage(Ketchup);
                case 3: return setImage(Paste);
                case 4: return setImage(Pickle);
                case 5: return setImage(Juice);
                case 6: return setImage(Chocolate);
                case 7: return setImage(TuttiFruity)
                case 8: return setImage(Cans);
                case 9: return setImage(Tea);
        }
    })

    return (
        <div className="detailsContainer" id={props.details.id}>
            <img className="carouselImage" src={image} />
            <div className="detailsScroll">
                <div className="detailsTitle">{props.details.name}</div>
                {props.details.projectHighlight.map(ele => (
                    <div className="projectHighlight">
                        {ele}
                    </div>
                ))
                }
                {Object.keys(props.details.details).map(heading => (
                    <CarouselSubTopics
                        subTitle={projectDetailSubheading[heading]} 
                        details={props.details.details[heading]}
                    />
                ))
                }
            </div>
        </div>
    )
}

export default Carousel