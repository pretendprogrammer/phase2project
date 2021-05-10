import InfoContainer from './InfoContainer'
import CompContainer from './CompContainer'
import React from 'react'

const ExpandedInfo = (props) => (
    <div>
        <InfoContainer selectedPrograms={props.selectedPrograms}/>
        <CompContainer selectedPrograms={props.selectedPrograms}/>
    </div>
)

export default ExpandedInfo