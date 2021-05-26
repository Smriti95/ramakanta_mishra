import React from 'react'
import Fab from '@material-ui/core/Fab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import './ImageCardContainer.css'
import Image from './ImageCard'

const ImageCard = props => {

    const fabButtonStyles = {
        backgroundColor: "#faa300"
    }

    const [showMore, setShowMore] = React.useState(false)

    const onShowMoreHandler = () => {
        setShowMore(true)
        props.onClickShowMore(true)
    }

    const onShowLessHandler = () => {
        setShowMore(false)
        props.onClickShowMore(false)
    }

    return(
        <div className="imageCardContainer">
            <div>
                <a rel="noopener noreferrer" href="top"/>
                {props.firstSet.map(ele => (
                    <Image id={ele.id} name={ele.name} openCardDetailsPopup={props.openCardDetailsPopup} onClick={props.onClick}/>
                ))}
            </div>
            {!showMore && 
                <div className="showMoreButtonContainer">
                    <button className="button" onClick={onShowMoreHandler}>Show More</button>
                </div>
            }
            {showMore && 
                <div>
                    {props.secondSet.map(ele => (
                        <Image id={ele.id} name={ele.name} openCardDetailsPopup={props.openCardDetailsPopup} onClick={props.onClick}/>
                    ))} 
                </div>
            }
            {showMore && 
                <div className="showLessButtonContainer">
                    <button className="button" onClick={onShowLessHandler}>Show Less</button>
                </div>
            }
            <div className="goToTopButtonContainer">
                <Fab
                    href="#top"
                    className="goToTopButton"
                    referrerPolicy="no-referrer"
                >
                    <ArrowUpwardIcon style={{color: "white", fontSize: 30}}/>
                </Fab>
            </div>
        </div>
    )
}

export default ImageCard