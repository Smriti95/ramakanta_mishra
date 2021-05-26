import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';

import './ImageCardContainer.css'
import GreenFieldFactoryImage from '../../assets/images/factory.jpg'
import Cans from  '../../assets/images/cans.jpg'
import Chocolate from '../../assets/images/chocolate.jpg'
import Gherkins from '../../assets/images/gherkins-8.jpeg'
import Jam from '../../assets/images/jam.jpg'
import Juice from '../../assets/images/juice.jpg'
import Ketchup from '../../assets/images/ketchup.jpg'
import Paste from '../../assets/images/paste.jpg'
import Pickle from '../../assets/images/pickle.jpg'
import Tea from '../../assets/images/tea.jpg'
import Wafer from '../../assets/images/wafer.jpg'
import Bottle from '../../assets/images/petbottle.jpg'
import ReadyToCook from '../../assets/images/readytocook.jpg'
import ReadyToEat from '../../assets/images/readytoeat.jpg'
import TuttiFruity from '../../assets/images/tuttifruity.jpg'

const Image = props => {
    const [Image, setImage] = React.useState("")

    React.useEffect(() => {
            switch(props.id){
                case 1: return setImage(GreenFieldFactoryImage);
                case 2: return setImage(ReadyToEat);
                case 3: return setImage(ReadyToCook);
                case 4: return setImage(Paste);
                case 5: return setImage(Ketchup);
                case 6: return setImage(Wafer);
                case 7: return setImage(Chocolate);
                case 8: return setImage(Juice);
                case 9: return setImage(Bottle);
                case 10: return setImage(Tea);
                case 11: return setImage(Pickle);
                case 12: return setImage(Jam);
                case 13: return setImage(Cans);
                case 14: return setImage(TuttiFruity)
            }
    },[])

    const onClickHandler = () => {
        props.openCardDetailsPopup(true)
        props.onClick(props.id)
    }

    return(
        <React.Fragment>
            <Tooltip title="Click to know more" arrow >
                <div key={props.id} className="imageCard" onClick={onClickHandler}>
                    <img alt={props.name} src={Image} className="image" referrerpolicy="no-referrer"/>
                    <div className="imageCardTitleContainer">
                        <div className="imageCardTitle">{props.name}</div>
                    </div>
                </div>
            </Tooltip>
        </React.Fragment>
    )
}

export default Image