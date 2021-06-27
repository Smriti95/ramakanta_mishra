import React from 'react'
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import MediaQuery from 'react-responsive'

import Header from '../../Components/Header/Header'
import './Projects.css'
import { projectDesc } from '../../utils/constants'
import Card from '../../Components/Card/Card'
import { projects } from '../../utils/constants'
import Carousel from '../../Components/Carousel/Carousel'
import Footer from '../../Components/Footer/Footer'

const Projects = props => {

    const [projId,setProjId] = React.useState(null)
    const [cardDetail,setCardDetail] = React.useState([])
    const [open,setOpen] = React.useState(false)

    const onClickHandler = id => {
        setProjId(id)
        let details = projects.filter(project => project.id === id)
        setCardDetail(details[0])
        window.scrollTo(0,0)
    }

    const onOpenCarousel = value => {
        setOpen(value)
    }

    React.useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        <React.Fragment>
            <Header />
            <div className="projects">
                <div className="projectsHeading">Projects</div>
                <div className="projectDesc">{projectDesc}</div>
                <Grid container className="projectCardContainer">
                    {projects.map(project =>
                        (
                            <Grid item xs={12} sm={4} className="projectCard">
                                <Card id={project.id} name={project.name} onButtonClick={onClickHandler} openCarousel={onOpenCarousel}/>
                            </Grid>
                        )
                    )}
                </Grid>
                <Modal
                    open={open}
                    onBackdropClick={() => setOpen(false)}
                >
                    <div className="projectModal">
                        <CloseRoundedIcon className="closeIcon" onClick={() => setOpen(false)} />
                        {projId !== 1 && <ArrowBackIosRoundedIcon className="backArrow" onClick={() => onClickHandler(projId - 1)} />}
                        <Carousel onClick={onClickHandler} details={cardDetail} />
                        {projId !== projects.length && <ArrowForwardIosRoundedIcon className="forwardArrow" onClick={() => onClickHandler(projId + 1)} />}
                        <MediaQuery minWidth={768}>
                            <div className="modalFooter">{projId} / {projects.length}</div>
                        </MediaQuery>
                    </div>
                </Modal>
            </div>
            <Footer footerClass={'footerProject'}/>
        </React.Fragment>
    )
}

export default Projects