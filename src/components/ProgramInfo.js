import React from 'react'
import { Card, Image, Rating} from 'semantic-ui-react'

const ProgramInfo = (props) => (
    <Card>
        <Image src={props.programObject.image}/>
        <Card.Content>
            <Card.Header>{props.programObject.title}</Card.Header>
            <Card.Meta>{props.programObject.developer}</Card.Meta>
            <Card.Description>{props.programObject.description}</Card.Description>
        </Card.Content>
        <Card.Content>
        <Rating icon='star' defaultRating={props.programObject.rating} maxRating={5} />
        </Card.Content>
    </Card>
)

export default ProgramInfo