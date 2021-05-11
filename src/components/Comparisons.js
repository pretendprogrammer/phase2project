import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

const Comparisons = (props) => {
    let textToShow = props.compsToDisplay.filter(comp => comp.id === props.programId)
    return (
        <Card>
            <Card.Content>
                <Card.Header>Reviews</Card.Header>
            </Card.Content>
            {textToShow.map(comp => (
                <Card.Content>
                    <Feed>
                        <Feed.Event>
                            <Feed.Label>
                                "User"
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