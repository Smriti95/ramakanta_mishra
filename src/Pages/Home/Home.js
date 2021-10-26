import React from 'react'
import Grid from '@material-ui/core/Grid';

import Header from '../../Components/Header/Header'
import IntroSection from './IntroSection'
import AboutMe from './AboutMe'
import StatisticsBar from './StatisticsBar'
import Footer from '../../Components/Footer/Footer'
import ExperienceTimeline from './ExperienceTimeline'
import './Home.css'

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Grid container className="homeGridContainer">
                <Grid item xs={12} sm={12} lg={12}>
                    <div className="introSection">
                        <IntroSection />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} className="gridItem">
                    <div className="aboutMe">
                        <AboutMe />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} className="gridItem">
                    <div className="statistics">
                        <StatisticsBar />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} className="gridItem">
                    <div className="experienceTimeline">
                        <ExperienceTimeline />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} className="gridItem">
                    <Footer footerClass="footerHome" />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Home