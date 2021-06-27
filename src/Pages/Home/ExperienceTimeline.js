import React from 'react'
import Modal from '@material-ui/core/Modal';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import './ExperienceTimeline.css'
import Timeline from '../../Components/Timeline/Timeline'
import { companyNames, companywiseExperience } from '../../utils/constants'
import timelineImage from '../../assets/images/experienceTimeline.jpg'
import CompanyExperience from '../Experience/CompanyExperience';

const ExperienceTimeline = () => {

    const [open, setOpen] = React.useState(false)
    const [company, setCompany] = React.useState('')

    const openModal = value => {
        setOpen(value)
    }

    const selectCompanyHandler = value => {
        setCompany(value)
    }

    return (
        <React.Fragment>
            <img src={timelineImage} className="timelineImage"/>
            <div className="timelineHeading">EXPERIENCE</div>
            <div className="timelineMainContainer">
                <Timeline openModal={openModal} selectCompany={selectCompanyHandler}/>
            </div>
            <Modal
                open={open}
                onBackdropClick={() => openModal(false)}
            >
                <div className="projectModal">
                    <CloseRoundedIcon className="timelineCloseIcon" onClick={() => setOpen(false)} />
                    <CompanyExperience companyName={company}/>
                </div>
                </Modal>
        </React.Fragment>
    )
}

export default ExperienceTimeline