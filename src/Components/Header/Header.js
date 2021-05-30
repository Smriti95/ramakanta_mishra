import React from 'react'
import {NavLink} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive'
import Divider from '@material-ui/core/Divider';

import './Header.css'
import { menuButtons } from '../../utils/constants'

// const Header = (props) => {

//     const [openDrawer, setOpenDrawer] = React.useState(false)

//     return(
//         <div className={props.style}>
//             {/* <div className="menuIconContainer">
//                 <MenuIcon className="menuIcon" onClick={() => setOpenDrawer(!openDrawer)} />
//             </div>
//             <Drawer
//                 anchor="left"
//                 open={openDrawer}
//                 onClose={() => setOpenDrawer(false)}
//                 SlideProps={{
//                     className: "drawerModal"
//                 }}
//             > */}
//                 <div className="menuContainer">
//                     {/* {
//                         menuButtons.map(ele => (
//                             <div className="menuLinkContainer">
//                                 <NavLink exact to={ele.path} activeClassName="selected" className="menuLink">{ele.name}</NavLink>
//                             </div>
//                         ))
//                     } */}
//                     <NavLink exact to="/ramakanta_mishra/" activeClassName="selected" className="menuLink">Home</NavLink>
//                     <NavLink to="/ramakanta_mishra/projects" activeClassName="selected" className="menuLink">Projects</NavLink>
//                     <NavLink to="/ramakanta_mishra/experience" activeClassName="selected" className="menuLink">Experience</NavLink>
//                     <NavLink to="/ramakanta_mishra/equipment" activeClassName="selected" className="menuLink">Equipment Exposure</NavLink>
//                     <NavLink to="/ramakanta_mishra/contact" activeClassName="selected" className="menuLink">Contact</NavLink>
//                 </div>
//             {/* </Drawer> */}
//         </div>
//     )
// }

// export default Header

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
                    <div className="menuContainer">
                        {
                            menuButtons.map(ele => (
                                <div className="menuLinkContainer">
                                    <div><NavLink exact to={`/ramakanta_mishra${ele.path}`} activeClassName="menuLinkSelected" className="menuLink">{ele.name}</NavLink></div>
                                    <div><Divider className="divider" variant="middle"/></div>
                                </div>
                            ))
                        }
                    </div>
                </Drawer>
            </MediaQuery>
            <MediaQuery minWidth={768}>
                Header
            </MediaQuery>
        </div>
    )
}

export default Header