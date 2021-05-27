import React from 'react'
import {withRouter} from 'react-router-dom'

import Header from '../../Components/Header/Header'
import Image from '../../assets/images/profile.png'
import './Home.css'
import Button from '../../Components/Button/Button'
import AboutMe from './AboutMe'
import StatisticsBar from './StatisticsBar'
import File from '../../assets/files/kunu.docx'


const Home = (props) => {

    const onClickHandler = (path) => {
        props.history.push(path)
    }

    return(
        <div style={{backgroundColor: '#dae9e4'}}>
            <Header style="headerContainerHome"/>
            <div className="homeBodyContainer">
                <div className="profileTextContainer">
                    <div className="introText">Hi! I am Ramakanta Mishra</div>
                    <div className="leftButton">
                        <Button style="homeButton" title="Contact Me" path="/ramakanta_mishra/contact" onClick={onClickHandler}/>
                    </div>
                    <div className="rightButton">
                        <button className="homeButton">
                            <a className="downloadButtonText" href={File} download rel="noopener noreferrer">Download CV</a>
                        </button>
                    </div>
                </div>
                <div className="profileImageContainer">
                    <img className="profileImage" alt="profile" referrerpolicy="no-referrer" src={Image}/>
                </div>
            </div>
            <div className="homeStatisticsBarContainer">
                <StatisticsBar />
            </div>    
            <div className="homeAboutMeContainer">
                <AboutMe />
            </div>
        </div>
    )
}

export default withRouter(Home)