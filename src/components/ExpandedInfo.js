import InfoContainer from './InfoContainer'
import CompContainer from './CompContainer'
import React from 'react'

const ExpandedInfo = (props) => (
    <div>
        <InfoContainer selectedPrograms={props.selectedPrograms}/>
        {props.selectedPrograms.length > 1 ? <CompContainer selectedPrograms={props.selectedPrograms}/> : null}
    </div>
)

export default ExpandedInfo