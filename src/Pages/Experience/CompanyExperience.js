import React from 'react'

import {companywiseExperience, companyNames} from '../../utils/constants'
import List from '../../Components/List/List'
import './CompanyExperience.css'

const CompanyExperience = (props) => {
    let companyName = companyNames.filter(ele => ele.path === props.companyName)[0].name
    let experienceDetails = companywiseExperience[props.companyName]
    let responsibilities = experienceDetails.responsibilities

    return(
            <div className="companyExperienceContainer">
                <div className="companyName">{companyName}</div>
                <div className="designation">{experienceDetails.designation}</div>
                <div className="duration">{experienceDetails.duration}</div>
                <div className="resTitle">Key Responsibilities & Achievements</div>
                <div className="resContainer">
                    {responsibilities.map((responsibility,index) => (
                            <List id={index<9 ? "0"+(index+1) : index+1} text={responsibility} />
                    ))}
                </div>
            </div>
    )
}

export default CompanyExperience