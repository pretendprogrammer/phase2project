import React, { useState } from 'react'
import InfoContainer from './InfoContainer'
import { Icon,Checkbox, Radio, Form, Message, Input, TextArea, Button, Select } from 'semantic-ui-react'

const comPlaceholder = `What does this program have that the other doesn't?`
const API = 'http://localhost:3000/'

const NewComparison = (props) => {

    const [value, setValue] = useState()

    const handleChange = (e, {value}) => {
        console.log(value)
        setValue(value)
    }

    const createNewComparison = (event) => {
        let newObject = {
            userId: props.user,
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
        .then(r => r.json)
        .then(newCompObject => {
            props.selectedPrograms.forEach(programObject => console.log('a thing'))
        })
    }

    return (
        <div>
            <InfoContainer selectedPrograms={props.selectedPrograms}/>
            <Form onSubmit={createNewComparison}>
                <Form.Field  width={3} id="categories" label='Category of Review' control='select'>
                    <option value='Ease of Use'>Ease of Use</option>
                    <option value='Functionality'>Functionality</option>
                    <option value='Reliability'>Reliability</option>
                    <option value='Aesthetics'>Aesthetics</option>
                 </Form.Field>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='reviewOne'
                        control={TextArea}
                        placeholder={comPlaceholder}
                        >
                    </Form.Field>
                    <Form.Field
                        id='reviewTwo'
                        control={TextArea}
                        placeholder={comPlaceholder}
                        >
                    </Form.Field>
                </Form.Group>
                <Form.Group inline>
                    <label>Rating</label>
                    <Form.Field
                        control={Radio}
                        label={
                            <div>
                                <Icon color='yellow' name='star' />
                            </div>
                        }
                        value='1'
                        checked={value === '1'}
                        onChange={handleChange}
                    />
                    <Form.Field
                        control={Radio}
                        label={
                            <div>
                                <Icon color='yellow' name='star' />
                                <Icon color='yellow' name='star' />
                            </div>
                        }
                        value='2'
                        checked={value === '2'}
                        onChange={handleChange}
                    />
                    <Form.Field
                        control={Radio}
                        label={
                            <div>
                                <Icon color='yellow' name='star' />
                                <Icon color='yellow' name='star' />
                                <Icon color='yellow' name='star' />
                            </div>
                        }
                        value='3'
                        checked={value === '3'}
                        onChange={handleChange}
                    />
                    <Form.Field
                        control={Radio}
                        label={
                            <div>
                                <Icon color='yellow' name='star' />
                                <Icon color='yellow' name='star' />
                                <Icon color='yellow' name='star' />
                                <Icon color='yellow' name='star' />
                            </div>
                        }
                        value='4'
                        checked={value === '4'}
                        onChange={handleChange}
                    />
                    <Form.Field
                        control={Radio}
                        label={
                            <div>
                                <Icon color='yellow' name='star' />
                                <Icon color='yellow' name='star' />
                                <Icon color='yellow' name='star' />
                                <Icon color='yellow' name='star' />
                                <Icon color='yellow' name='star' />
                            </div>
                        }
                        value='5'
                        checked={value === '5'}
                        onChange={handleChange}
                    />

                </Form.Group>
                
                <Message
                    success
                    header='Review Completed'
                    content='Your comparions-review has been succesfully submited. Thank you!'
                    />
                <Form.Field control={Button}>Submit</Form.Field>
            </Form>
        </div>
    )
}

export default NewComparison