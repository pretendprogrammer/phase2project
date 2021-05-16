import React from 'react'
import { useHistory } from 'react-router'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const NewProgram = (props) => {
    const API = 'http://localhost:3000/programs'
    const history = useHistory()

    if (!props.userId) {
        history.push('/')
    }

    const handleSubmit = (e) => {

        let title = e.target.title.value
        let image = e.target.image.value
        let developer = e.target.developer.value
        let description = e.target.description.value
        let programCategories = e.target.categories.value

        if (programCategories.length < 1 || title.length < 1 || title.length < 1 || developer.length < 1 || description.length < 1) {
            return null
        }

        let newObject = {        
            title: title,
            image: image,
            developer: developer,
            description: description,
            programCategories: [programCategories],
            rating: null,
            comparisonsRef: []
        }

        let postConfig = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObject)
        }

        fetch(API, postConfig)
            .then(r => r.json())
            .then(newProgramObject => {
                props.addToProgramsList(newProgramObject)
                history.push('/')
            })
        
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
                <Form.Field
                    id="title"
                    control={Input}
                    label="Title"
                    placeholder="Insert Title"
                />
                <Form.Field
                    id="developer"
                    control={Input}
                    label="Developer"
                    placeholder="Insert Program Developer"
                />
                <Form.Field id="categories" label='Categories' control='select'>
                    <option value='' selected={true} disabled={true} >None</option>
                    <option value='Dating'>Dating</option>
                    <option value='Games'>Games</option>
                    <option value='Multimedia'>Multimedia</option>
                    <option value='Finance'>Finance</option>
                 </Form.Field>
            </Form.Group>
            <Form.Field
                id='description'
                control={TextArea}
                label='Description'
                placeholder='Insert Description of Program'
            />
            <Form.Field
                id='image'
                control={Input}
                label='Image'
                placeholder='Insert Program Logo URL'
            />
            <Form.Field
                id='submitButton'
                control={Button}
                content='Submit'
                label='Submit New Program'
            />
            {/* <input type="text" name="title" placeholder="Insert Title"></input>
            <input type="text" name="image" placeholder="Insert Image URL"></input>
            <input type="text" name="developer" placeholder="Insert Program Developer"></input>
            <input type="text" name="description" placeholder="Insert Description of the Program"></input>
            <select type="text" name="programCategories">
                <option value="Dating">Dating</option>
                <option value="Games">Games</option>
                <option value="Multimedia">Multimedia</option>
                <option value="Finance">Finance</option>
            </select>
            <button>Submit</button> */}
        </Form>
)
}

export default NewProgram