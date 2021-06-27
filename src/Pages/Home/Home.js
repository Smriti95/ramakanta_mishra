import React from 'react'

import Header from '../../Components/Header/Header'
import IntroSection from './IntroSection'
import AboutMe from './AboutMe'
import StatisticsBar from './StatisticsBar'
import Footer from '../../Components/Footer/Footer'
import ExperienceTimeline from './ExperienceTimeline'
import './Home.css'

const Home = () => {
    return(
        <React.Fragment>
            <Header />
            <div className="introSection">
                <IntroSection />
            </div>
            <div className="aboutMe">
                <AboutMe />
            </div>
            <div className="statistics">
                <StatisticsBar />
            </div>
            <div className="experienceTimeline">
                <ExperienceTimeline />
            </div>
            <Footer footerClass="footerHome"/>
        </React.Fragment>
    )
}

export default Home