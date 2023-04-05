import React from 'react'
import {NavLink} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive'
import Divider from '@material-ui/core/Divider';

import './Header.css'
import { menuButtons } from '../../utils/constants'

const Header = () => {

    const [openDrawer, setOpenDrawer] = React.useState(false)

    return(
        <div className="headerContainer">
            <MediaQuery maxWidth={767}>
                <MenuIcon className="menuIcon" onClick={() => setOpenDrawer(!openDrawer)}/>
                <Drawer
                    anchor="left"
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                    SlideProps={{
                        className: "drawerModal"
                    }}
                >
                    <div>
                        {
                            menuButtons.map(ele => (
                                <div className="menuLinkContainer">
                                    <div><NavLink exact to={`${ele.path}`} activeClassName="menuLinkSelected" className="mobileMenuLink">{ele.name}</NavLink></div>
                                    <div><Divider className="divider" variant="middle"/></div>
                                </div>
                            ))
                        }
                    </div>
                </Drawer>
            </MediaQuery>
            <MediaQuery minWidth={768}>
                <div className="menuContainer">
                    <NavLink exact to="/" activeClassName="menuLinkSelected" className="menuLink">Home</NavLink>
                    <NavLink to="/projects" activeClassName="menuLinkSelected" className="menuLink">Projects</NavLink>
                    <NavLink to="/equipment" activeClassName="menuLinkSelected" className="menuLink">Equipment Exposure</NavLink>
                    <NavLink to="/contact" activeClassName="menuLinkSelected" className="menuLink">Contact</NavLink>
                </div>
            </MediaQuery>
        </div>
    )
}

export default Header