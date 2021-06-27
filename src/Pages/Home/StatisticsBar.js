// import React from 'react'
// import Grid from '@material-ui/core/Grid';

// import './StatisticsBar.css'
// import { milestones } from '../../utils/constants'

// const StatisticsBar = props => {
//     return(
//         <React.Fragment>
//             <div className="statisticsMainContainer">
//                 <Grid container className="statisticsContainer">
//                     <Grid item xs={12} sm={3} className="statisticsCardHolder">
//                         <div className="statisticsCard">
//                             <div className="statisticsCardTextContainer">
//                                 <div className="commaLeft">" </div>
//                                 <div className="milestoneText">{milestones[0]}</div>
//                                 <div className="commaRight"> ''</div>
//                             </div>
//                         </div>
//                     </Grid>
//                     <Grid item xs={12} sm={3} className="statisticsCardHolder">
//                         <div className="statisticsCard">
//                             <div className="statisticsCardTextContainer">
//                                 <div className="commaLeft">" </div>
//                                 <div className="milestoneText">{milestones[1]}</div>
//                                 <div className="commaRight"> ''</div>
//                             </div>
//                         </div>
//                     </Grid>
//                     <Grid item xs={12} sm={3} className="statisticsCardHolder">
//                         <div className="statisticsCard">
//                             <div className="statisticsCardTextContainer">
//                                 <div className="commaLeft">" </div>
//                                 <div className="milestoneText">{milestones[2]}</div>
//                                 <div className="commaRight"> ''</div>
//                             </div>
//                         </div>
//                     </Grid>
//                 </Grid>
//             </div>
//         </React.Fragment>
//     )
// }

// export default StatisticsBar

import React from 'react'
import Grid from '@material-ui/core/Grid';

import './StatisticsBar.css'
import { milestones } from '../../utils/constants'

const StatisticsBar = props => {
    return(
        <React.Fragment>
            <div className="statisticsMainContainer">
                <Grid container className="statisticsContainer">
                    {milestones.map(milestone => (
                        <Grid item xs={12} sm={3} className="statisticsCardHolder">
                            <div className="statisticsCard">
                                <div className="statisticsCardTextContainer">
                                    <div className="commaLeft">" </div>
                                    <div className="milestoneText">{milestone}</div>
                                    <div className="commaRight"> ''</div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </React.Fragment>
    )
}

export default StatisticsBar