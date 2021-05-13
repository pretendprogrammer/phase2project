import React, { useState } from 'react'
import InfoContainer from './InfoContainer'
import { Card, Icon, Checkbox, Radio, Form, Message, Input, TextArea, Button, Select, Rating, FormGroup } from 'semantic-ui-react'
import CardContainer from './CardContainer'
import { useHistory } from 'react-router'

const comPlaceholder = `What does this program have that the other doesn't?`
const API = 'http://localhost:3000/'

const NewComparison = (props) => {

    const [ratingOne, setRatingOne] = useState(1)
    const [ratingTwo, setRatingTwo] = useState(1)

    const ratings = [ratingOne, ratingTwo]

    const history = useHistory()

    const createNewComparison = (event) => {

        let categories = event.target.categories.value
        let reviewOne = event.target.reviewOne.value
        let reviewTwo = event.target.reviewTwo.value


        if (props.selectedPrograms.length < 2 || categories.length === 0 || reviewOne.length === 0 || reviewTwo.length === 0) {
            return null
        }
        let newObject = {
            userId: props.userId,
            rating: null,
            categories: [event.target.categories.value],
            comparison: [
                {
                    id: props.selectedPrograms[0].id,
                    text: event.target.reviewOne.value
                },
                {
                    id: props.selectedPrograms[1].id,
                    text: event.target.reviewTwo.value
                }
            ]
        }

        let postConfig = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObject)
        }
    
        fetch(API+'comparisons', postConfig)
        .then(r => r.json())
        .then(newCompObject => {
            props.selectedPrograms.forEach((programObject, index) => {
                programObject.comparisonsRef.push(newCompObject.id)
                programObject.rating = (programObject.rating + ratings[index]) / programObject.comparisonsRef.length
                let patchConfig = {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({comparisonsRef: programObject.comparisonsRef, rating: programObject.rating})
                }

                fetch(API+'programs/'+programObject.id, patchConfig)
                .then(r => r.json())
                .then(() => null)
            })
            props.fetchProgramsList()
            history.push('/')
        })
    }

    return (
        <div>
            <InfoContainer selectedPrograms={props.selectedPrograms}/>
                <Form onSubmit={createNewComparison}>
                    <FormGroup style={{position: 'relative',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}>
                        <Form.Field width={3} id="categories" label='Category of Review' control='select'>
                            <option value='Ease of Use'>Ease of Use</option>
                            <option value='Functionality'>Functionality</option>
                            <option value='Reliability'>Reliability</option>
                            <option value='Aesthetics'>Aesthetics</option>
                        </Form.Field>
                    </FormGroup>
                    <Card.Group itemsPerRow={2}>
                        <Card>
                            <Form.Field
                                id='reviewOne'
                                control={TextArea}
                                placeholder={comPlaceholder}

                            >
                            </Form.Field>
                            <Rating icon='star' defaultRating={0} maxRating={5} onRate={(e, {rating}) => setRatingOne(rating)} />
                        </Card>
                        <Card>
                            <Form.Field
                                    id='reviewTwo'
                                    control={TextArea}
                                    placeholder={comPlaceholder}
                                    >
                            </Form.Field>
                            <Rating icon='star' defaultRating={0} maxRating={5} onRate={(e, {rating}) => setRatingTwo(rating)} />
                        </Card>
                    </Card.Group>
                    
                    <Message
                        success
                        header='Review Completed'
                        content='Your comparions-review has been succesfully submited. Thank you!'
                        />
                    <Form.Field control={Button}>Submit</Form.Field>
                </Form>
            <CardContainer
                programsList={props.programsList}
                addToSelectedPrograms={props.addToSelectedPrograms}/>
        </div>
    )
}

export default NewComparison