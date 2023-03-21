import React from 'react'

import Header from '../../Components/Header/Header'
import './EquipmentExposure.css'
import { equipmentExposureDesc } from '../../utils/constants'
import Tea from '../../assets/images/tea.jpg'
import { equipmentExposure } from '../../utils/constants'
import Equipment from './Equipment'
import Footer from '../../Components/Footer/Footer'

const EquipmentExposure = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="equipmentExposure">
                <img className="backgroundImageEquipment" src={Tea} />
                <div className="equipmentExposureHeading">Equipment exposure</div>
                {/* <div className="equipmentExposureDesc">{equipmentExposureDesc}</div> */}
                <div className="equipmentMainContainer">
                    {equipmentExposure.map(equipment => (
                        <Equipment equipmentDetails={equipment} />
                    ))}
                </div>
            </div>
            <Footer footerClass={'footerEquipment'}/>
        </React.Fragment>
    )
}

export default EquipmentExposure
