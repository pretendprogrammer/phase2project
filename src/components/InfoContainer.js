import React from 'react'
import { Card } from 'semantic-ui-react'
import ProgramInfo from './ProgramInfo'

const InfoContainer = (props) => (
    <Card.Group itemsPerRow={2}>
        {props.selectedPrograms.map(programObject => <ProgramInfo key={programObject.id} programObject={programObject}/>)}
    </Card.Group>
)

export default InfoContainer