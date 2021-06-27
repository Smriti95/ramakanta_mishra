import React from 'react'
import {withRouter} from 'react-router-dom'

import './Error.css'

const ErrorPage = props => {

    const onClickHandler = (path) => {
        props.history.push(path)
    }

    return(
        <div className="errorPageContainer">
            <div className="errorCard">
                <div className="errorBorder">
                    <div className="errorText">Oops!! Seems like this page doesn't exist</div>
                    {/* <Button style="errorButton" title="Go Back To Home" path="/ramakanta_mishra/" onClick={onClickHandler}/> */}
                </div>
            </div>
        </div>
    )
}

export default withRouter(ErrorPage)