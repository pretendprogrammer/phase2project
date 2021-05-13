import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

const Comparisons = (props) => {
    let textToShow = props.compsToDisplay.filter(comp => comp.id === props.programId)
    let usersToShow = props.compUsers.filter(userId => userId % 2 === props.userSort)
    return (
        <Card>
            <Card.Content>
                <Card.Header>Reviews</Card.Header>
            </Card.Content>
            {textToShow.map((comp, index) => (
                <Card.Content>
                    <Feed>
                        <Feed.Event>
                            <Feed.Label>
                                {usersToShow[index]}
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Summary>
                                    {comp.text}
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