import React from 'react'
import { Card, Image, Rating} from 'semantic-ui-react'

const ProgramInfo = (props) => (
    <Card>
        <Image wrapped ui={false} size='tiny' floated='right' src={props.programObject.image}/>
        <Card.Content>
            <Card.Header>{props.programObject.title}</Card.Header>
            <Card.Meta>{props.programObject.developer}</Card.Meta>
            <Card.Description>{props.programObject.description}</Card.Description>
        </Card.Content>
        <Card.Content>
            <Rating icon='star' defaultRating={Math.round(props.programObject.rating)} maxRating={5} disabled />
        </Card.Content>
    </Card>
)

export default ProgramInfo