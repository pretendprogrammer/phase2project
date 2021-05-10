import InfoContainer from './InfoContainer'
import Comparisons from './Comparisons'
import React from 'react'

const CompContainer = (props) => (
    <div>
        <InfoContainer selectedPrograms={props.selectedPrograms}/>
        <Comparisons />
    </div>
)

export default CompContainer