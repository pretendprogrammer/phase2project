import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

const Comparisons = (props) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>Reviews</Card.Header>
            </Card.Content>
            {props.compsToDisplay.map((comp) => (
                <Card.Content key={comp.id}>
                    <Feed>
                        <Feed.Event>
                            <Feed.Label>
                            {props.usersArray.find(userObject => userObject.id === comp.userId) !== undefined ?
                            props.usersArray.find(userObject => userObject.id === comp.userId).username :
                            null}
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Summary>
                                    {comp.comparison.find(compObject => compObject.id === props.programId) !== undefined ?
                                    comp.comparison.find(compObject => compObject.id === props.programId).text :
                                    null}
                                </Feed.Summary>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>    
                </Card.Content>
            ))}
        </Card>
    )
}

export default Comparisons