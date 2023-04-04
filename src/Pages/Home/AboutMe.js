import React from 'react'
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom'
import MediaQuery from 'react-responsive';

import { AboutMeDetails } from '../../utils/constants'
import './AboutMe.css'
import Image from '../../assets/images/profile.jpg'

const AboutMe = props => {

    const onClickHandler = path => {
        props.history.push(path)
    }
    
    return(
        <React.Fragment>
            <Grid container className="aboutMeMainContainer">
                <MediaQuery maxWidth={767}>
                    <Grid item sm={6} xs={12} className="aboutMeSecondContainerMobile">
                        <div className="aboutMeImageContainer">
                            <img className="aboutMeImage" alt="profile" referrerpolicy="no-referrer" src={Image}/>
                        </div>
                    </Grid>
                </MediaQuery>
                <Grid item sm={6} xs={12} className="aboutMeFirstContainer">
                    <div className="aboutMeHeading">ABOUT ME</div>
                    <div className="aboutMeDetailsContainer">
                        <div className="aboutMeDetails">{AboutMeDetails[0]}</div>
                        <div className="aboutMeDetails">{AboutMeDetails[1]}</div>
                    </div>
                    <Grid container className="aboutMeButtonContainer">
                        <Grid item xs={12} sm={6}>
                            <button className="aboutMeButton" onClick={() => onClickHandler('/projects')}>Projects</button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <button className="aboutMeButton" onClick={() => onClickHandler('/equipment')}>Equipment Exposure</button>
                        </Grid>
                    </Grid>
                </Grid>
                <MediaQuery minWidth={768}>
                    <Grid item sm={6} xs={12} className="aboutMeSecondContainer">
                        <div className="aboutMeImageContainer">
                            <img className="aboutMeImage" alt="profile" referrerpolicy="no-referrer" src={Image}/>
                        </div>
                    </Grid>
                </MediaQuery>
            </Grid>
        </React.Fragment>
    )
}

export default withRouter(AboutMe)
