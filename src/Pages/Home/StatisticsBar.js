import React from 'react'
import Divider from '@material-ui/core/Divider';

import './StatisticsBar.css'

const StatisticsBar = props => {
    return(
        <div className="statisticsCardContainer">
            <div className="statisticsCard">
                <div className="cardContent">
                    <div className="upperCardDetails"><span className="number">30 </span> years</div>
                    <div>total experience</div>
                </div>
                <Divider orientation="vertical" />
                <div className="cardContent">
                    <div className="upperCardDetails"><span className="number">15 </span> years</div>
                    <div>experience in Green Field Projects</div>
                </div>
                <Divider orientation="vertical" />
                <div className="cardContent">
                    <div className="upperCardDetails"><span className="number">7</span></div>
                    <div>large new project setup</div>
                </div>
            </div>
        </div>
    )
}

export default StatisticsBar