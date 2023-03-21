import React from 'react'
import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router-dom'

import './IntroSection.css'
import File from '../../assets/files/Ramakanta_Mishra_Resume.docx'

const IntroSection = props => {

    const onClickHandler = () => {
        props.history.push('/ramakanta_mishra/contact')
    }

    return(
        <React.Fragment>
            <Grid container className="introMainGridContainer">
                <Grid item xs={12} sm={12} className="introTextContainer">
                    <div className="introText">Hello! I am <span className="nameText">Ramakanta Mishra</span></div>
                    <div className="introDesignation">Project Manager</div>
                    <Grid container alignContent="center" className="introTextGrid">
                        <Grid item xs={12} sm={6}>
                            <button className="introButton" onClick={onClickHandler}>Contact Me</button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <button className="introButton">
                                <a className="downloadButtonText" href={File} download rel="noopener noreferrer">Download CV</a>
                            </button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default withRouter(IntroSection)