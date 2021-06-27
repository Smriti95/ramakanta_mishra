import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';

import './Footer.css'
import { contactDetails } from '../../utils/constants'

const Footer = props => {
    return(
        <div className={props.footerClass}>
            <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={3} className="footerItem">
                    <LinkedInIcon className="footerIcon"/>
                    <div className="footerText">
                        <a style={{textDecoration: 'none', color: 'ghostwhite'}} href={contactDetails.linkedinLink} rel="noreferrer noopener" target="_blank">{contactDetails.linkedinText}</a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} className="footerItem">
                    <EmailIcon className="footerIcon"/>
                    <div className="footerText">{contactDetails.email}</div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} className="footerItem">
                    <PhoneIcon className="footerIcon"/>
                    <div className="footerText">{contactDetails.phone}</div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} className="footerItem">
                    <LocationOnIcon className="footerIcon"/>
                    <div className="footerText">{contactDetails.location}</div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer