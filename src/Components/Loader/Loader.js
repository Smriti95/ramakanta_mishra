import React from 'react'
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";

const override = css`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
`;

const Loader = () => {
    return(
        <React.Fragment>
            <PropagateLoader color={'rgba(250, 163, 0, 100%)'} loading={true} css={override} size={15} />
        </React.Fragment>
    )
}

export default Loader
