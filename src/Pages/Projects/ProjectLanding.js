import React from 'react'
import Modal from '@material-ui/core/Modal';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import Header from '../../Components/Header/Header'
import { projects } from '../../utils/constants'
import Card from '../../Components/Card/Card'
import './ProjectLanding.css'
import Carousel from '../../Components/Carousel/Carousel'
import ImageCard from '../../Components/Card/ImageCardContainer'

const Projects = () => {

    const [projId,setProjId] = React.useState(null)
    const [cardDetail,setCardDetail] = React.useState([])
    const [open,setOpen] = React.useState(false)
    const [firstSet, setFirstSet] = React.useState([])
    const [secondSet, setSecondSet] = React.useState([])
    const [showMore, setShowMore] = React.useState(false)

    React.useEffect(() => {
        let firstSet = []
        let secondSet = []
        projects.map(project => {
            if(project.id < 5){
                firstSet.push(project)
            }
            else{
                secondSet.push(project)
            }
        })
        setFirstSet(firstSet)
        setSecondSet(secondSet)
    },[])

    const openCardDetailsPopup = value => {
        setOpen(value)
    }

    const onCardClickHandler = value => {
        setProjId(value)
        let details = projects.filter(project => project.id === value)
        setCardDetail(details[0])
    }

    const onClickShowMore = value => {
        setShowMore(value)
    }

    return(
        <div>
            <Header style="headerContentPage"/>
            <div className="projectContainer">
                <div className="projectLeftContainer" style={showMore ? {height: 2000} : {}}>
                    <div className="projectHeadingText">Projects</div>
                </div>
                <div className="projectRightContainer">
                    <ImageCard 
                        firstSet={firstSet} 
                        secondSet={secondSet} 
                        openCardDetailsPopup={openCardDetailsPopup} 
                        onClick={onCardClickHandler}
                        onClickShowMore={onClickShowMore}
                    />
                </div>
            </div>
            <Modal
                open={open}
                onBackdropClick={() => setOpen(false)}
            >
                <div className="projectModal">
                    <CloseRoundedIcon className="closeIcon" onClick={() => setOpen(false)}/>
                    {projId !== 1 && <ArrowBackIosRoundedIcon className="backArrow" onClick={() => onCardClickHandler(projId-1)}/>}
                    <Carousel onClick={onCardClickHandler} details={cardDetail}/>
                    {projId !== projects.length && <ArrowForwardIosRoundedIcon className="forwardArrow" onClick={() => onCardClickHandler(projId+1)}/>}
                </div>
            </Modal>
        </div>
    )
}

export default Projects