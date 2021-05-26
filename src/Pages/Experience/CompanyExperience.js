import React from 'react'

import {companywiseExperience, companyNames} from '../../utils/constants'
import List from '../../Components/List/List'
import Header from '../../Components/Header/Header'
import './CompanyExperience.css'

const CompanyExperience = (props) => {
    let companyName = companyNames.filter(ele => ele.path === props.match.params.companyName)[0].name
    let experienceDetails = companywiseExperience[props.match.params.companyName]
    let mid = parseInt(experienceDetails.responsibilities.length/2)
    
    const [firstSet,setFirstSet] = React.useState([])
    const [secondSet,setSecondSet] = React.useState([])

    React.useEffect(() => {
        let firstArray = []
        let secondArray = []
        for(let i=0; i<experienceDetails.responsibilities.length; i++){
            if(i<=mid){
                firstArray.push(experienceDetails.responsibilities[i])
            }
            else{
                secondArray.push(experienceDetails.responsibilities[i])
            }
        }
        setFirstSet(firstArray)
        setSecondSet(secondArray)
    },[])

    return(
        <div>
            <Header />
            <div className="companyExperienceContainer">
                <div className="companyName">{companyName}</div>
                <div className="designation">{experienceDetails.designation}</div>
                <div className="duration">{experienceDetails.duration}</div>
                <div className="resTitle">Key Responsibilities & Achievements</div>
                <div className="resContainer">
                    <div className="firstSet">
                        {firstSet.map((responsibility,index) => (
                            <List id={index<10 ? "0"+(index+1) : index+1} text={responsibility} />
                        ))}
                    </div>
                    <div className="secondSet">
                        {secondSet.map((responsibility,index) => (
                            <List id={mid+index+2<10 ? "0"+(mid+index+2) : mid+index+2} text={responsibility} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyExperience