import React from 'react'

import { AboutMeDetails } from '../../utils/constants'
import './AboutMe.css'

const AboutMe = props => {
    return(
        <div>
            <div className="leftContainerAboutMe">
                <div className="aboutMeHeading">About Me</div>
            </div>
            <div className="rightContainerAboutMe">
                <div className="aboutMeListContainer">
                    {AboutMeDetails.map(ele => (
                        <div key={ele.id} className="aboutMeList">
                            <div className="listId">
                                <span className="listIdText">
                                    {ele.id}
                                </span>
                            </div>
                            <div className="listDesc">{ele.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutMe