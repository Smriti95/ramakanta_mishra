import React from 'react'
import Modal from '@material-ui/core/Modal';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Fab from '@material-ui/core/Fab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import Header from '../../Components/Header/Header'
import { equipmentExposure } from '../../utils/constants'
import Card from '../../Components/Card/Card'
import './EquipmentExposure.css'
import Carousel from '../../Components/Carousel/Carousel'

const EquipmentExposure = () => {

    const [equipId,setEquipId] = React.useState(null)
    const [cardDetail,setCardDetail] = React.useState([])
    const [open,setOpen] = React.useState(false)
    const [firstSet, setFirstSet] = React.useState([])
    const [secondSet, setSecondSet] = React.useState([])
    const [showMore, setShowMore] = React.useState(false)

    React.useEffect(() => {
        let firstSet = []
        let secondSet = []
        equipmentExposure.map(equipment => {
            if(equipment.id < 7){
                firstSet.push(equipment)
            }
            else{
                secondSet.push(equipment)
            }
        })
        setFirstSet(firstSet)
        setSecondSet(secondSet)
    },[])

    const openCardDetailsPopup = value => {
        setOpen(value)
    }

    const onCardClickHandler = value => {
        setEquipId(value)
        let details = equipmentExposure.filter(equipment => equipment.id === value)
        setCardDetail(details[0])
    }

    const onShowMoreHandler = () => {
        setShowMore(true)
    }

    const onShowLessHandler = () => {
        setShowMore(false)
    }

    return(
        <div>
            <Header style="headerContentPage"/>
            <div className="equipmentContainer">
                <div className="equipmentLeftContainer" style={showMore ? {height: 1200} : {}}>
                    <div className="equipmentHeadingText">Equipment Exposure</div>
                </div>
                <div className="equipmentRightContainer">
                    <div className="equipCardContainer">
                        <div>
                            <a href="top" rel="noopener noreferrer"/>
                            {firstSet.map(equipment => (
                                <Card equipment={true} id={equipment.id} title={equipment.name} openDetails={openCardDetailsPopup} onClick={onCardClickHandler} />
                            ))}
                        </div>
                        {!showMore && 
                            <div className="equipShowMoreButtonContainer">
                                <button className="button" onClick={onShowMoreHandler}>Show More</button>
                            </div>
                        }
                        {showMore && secondSet.map(equipment => (
                            <Card equipment={true} id={equipment.id} title={equipment.name} openDetails={openCardDetailsPopup} onClick={onCardClickHandler}/>
                        ))}
                        {showMore && 
                            <div className="equipShowLessButtonContainer">
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
                </div>
            </div>
            <Modal
                open={open}
                onBackdropClick={() => setOpen(false)}
            >
                <div className="projectModal">
                    <CloseRoundedIcon className="closeIcon" onClick={() => setOpen(false)}/>
                    {equipId !== 1 && <ArrowBackIosRoundedIcon className="backArrow" onClick={() => onCardClickHandler(equipId-1)}/>}
                    <Carousel onClick={onCardClickHandler} details={cardDetail}/>
                    {equipId !== equipmentExposure.length && <ArrowForwardIosRoundedIcon className="forwardArrow" onClick={() => onCardClickHandler(equipId+1)}/>}
                </div>
            </Modal>
        </div>
    )
}

export default EquipmentExposure