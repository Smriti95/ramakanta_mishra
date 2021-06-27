import React from 'react'
import LazyLoad from 'react-lazyload'

import Cans from  '../../assets/images/cans.jpg'
import Chocolate from '../../assets/images/chocolate.jpg'
import Juice from '../../assets/images/juice.jpg'
import Ketchup from '../../assets/images/ketchup.jpg'
import Paste from '../../assets/images/paste.jpg'
import Pickle from '../../assets/images/pickle.jpg'
import Tea from '../../assets/images/tea.jpg'
import ReadyToEat from '../../assets/images/readytoeat.jpg'
import TuttiFruity from '../../assets/images/tuttifruity.jpg'
import './Card.css'

const Card = props => {
    const [image, setImage] = React.useState("")
    const [imageLoaded, setImageLoaded] = React.useState(false)
    const [imgClass, setImgClass] = React.useState('image')

    React.useEffect(() => {
            setImgClass('image')
            setImageLoaded(false)
            switch(props.id){
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
    },[])

    const onClickHandler = () => {
        props.onButtonClick(props.id)
        props.openCarousel(true)
    }

    const onImageLoad = () => {
        setImageLoaded(true)
        setImgClass('img-loaded')
    }

    return(
        <React.Fragment>
            <div className="card">
                <LazyLoad height={200} offset={200} once scroll>
                    <img src={image} className={imgClass} onLoad={onImageLoad}/>
                </LazyLoad>
                <div className="projectName">{props.name}</div>
                <button className="projectCardButton" onClick={onClickHandler}>Read More</button>
            </div>
        </React.Fragment>
    )
}

export default Card