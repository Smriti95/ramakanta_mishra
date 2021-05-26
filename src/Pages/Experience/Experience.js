import React from 'react'
import {withRouter} from 'react-router-dom'

import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button'
import {companyNames} from '../../utils/constants'
import './Experience.css'

const Experience = (props) => {

    const onClickHandler = (path) => {
        props.history.push(`/experience/${path}`)
    }

    return(
        <div>
            <Header style="headerContentPage"/>
            <div className="experienceContainer">
                <div className="experienceLeftContainer">
                    <div className="experienceHeadingText">Key Responsibilities & Achievements in Organizations</div>
                </div>
                <div className="experienceRightContainer">
                    <div className="experienceBodyContainer">
                        {companyNames.map(company => (
                            <Button style="experienceButton" title={company.name} path={company.path} onClick={onClickHandler} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Experience)