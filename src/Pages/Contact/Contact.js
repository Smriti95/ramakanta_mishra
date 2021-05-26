import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Header from '../../Components/Header/Header'
import image from '../../assets/images/book.jpg'
import './Contact.css'
import { contactDetails } from '../../utils/constants'

const Contact = () => {
    return(
        <div>
            <Header style="headerContainer"/>
            <div>
                <img src={image} alt="contact" referrerpolicy="no-referrer" className="contactImage" />
                <div className="contactCard">
                    <div className="contactBorder">
                        <div className="contactTitle">
                            Get in touch
                        </div>
                        <div className="contactInfoContainer">
                            <EmailIcon className="icon" />
                            <div className="detailText">{contactDetails.email}</div>
                        </div>
                        <div className="contactInfoContainer">
                            <LinkedInIcon style={{fontSize: 28, marginLeft: '-2px'}} className="icon" /> 
                            <div className="linkedindetailText">
                                <a style={{textDecoration: 'none', color: 'black'}} href={contactDetails.linkedinLink} rel="noreferrer noopener" target="_blank">{contactDetails.linkedinText}</a>
                            </div>
                        </div>
                        <div className="contactInfoContainer">
                            <PhoneIcon className="icon" />
                            <div className="detailText">{contactDetails.phone}</div>
                        </div>
                        <div className="contactInfoContainer">
                            <LocationOnIcon className="icon" />
                            <div className="detailText">{contactDetails.location}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact