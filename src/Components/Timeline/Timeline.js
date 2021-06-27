import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { withRouter } from 'react-router-dom'

import { companyNames, companywiseExperience } from '../../utils/constants'
import './Timeline.css'

const TimelineComponent = props => {

    const onClickHandler = value => {
        props.openModal(true)
        props.selectCompany(value)
    }

    return (
        <div>
            <Timeline align="alternate">
                {companyNames.map((company,index) => (
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot style={{backgroundColor: '#708270', padding: '6px'}}/>
                            {index < (companyNames.length - 1) ? <TimelineConnector style={{backgroundColor: '#708270'}}/> : ""}
                        </TimelineSeparator>
                        <TimelineContent className={index%2 == 1 ? 'timelineContainerRight' : 'timelineContainerLeft' }>
                            <div className="timelineDuration">{companywiseExperience[company.path].duration}</div>
                            <div className="timelineCompany">{company.name}</div>
                            <div className="timelineDesignation">{companywiseExperience[company.path].designation}</div>
                            <button className="timelineButton" onClick={() => onClickHandler(company.path)}>Read More</button>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    )
}

export default withRouter(TimelineComponent)