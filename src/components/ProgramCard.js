import { Card, Image } from 'semantic-ui-react'
import React from 'react'

const ProgramCard = (props) => (
    <Card>
        <div onClick={() => props.addToSelectedPrograms(props.programObject)}>
            <Image src={props.programObject.image} size='large'/>
            <Card.Header>{props.programObject.title}</Card.Header>
        </div>
    </Card>
)

export default ProgramCard