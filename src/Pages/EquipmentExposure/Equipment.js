import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Equipment.css'

const Equipment = props => {

    const [yellow, setYellow] = React.useState('')
    const [expand, setExpand] = React.useState(false)
    const [iconClass, setIconClass] = React.useState('expandIcon')

    React.useEffect(() => {
        window.scrollTo(0,0)
    },[])

    React.useEffect(() => {
        let evenId = props.equipmentDetails.id % 2
        if(evenId === 1){
            setYellow('equipmentContainerYellow')
        }
        else{
            setYellow('equipmentContainerGreen')
        }
    })

    const onExpand = () => {
        setExpand(!expand)
        if(!expand === true){
            setIconClass('expandIcon expandedIcon')
        }
        else{
            setIconClass('expandIcon notExpandedIcon')
        }
    } 

    return(
        <div className={yellow}>
            <div className="equipmentTitle">{props.equipmentDetails.name}</div>
            <ExpandMoreIcon className={iconClass} onClick={onExpand}/>
            {expand && (
                props.equipmentDetails.details.map(detail => (
                    <div className="equipmentDetailText">{detail}</div>
                ))
            )}
        </div>
    )
}

export default Equipment