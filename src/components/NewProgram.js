import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const NewProgram = (props) => {

    const programCategories = [
        { key: 'd', text: 'Dating', value: 'Dating' },
        { key: 'g', text: 'Games', value: 'Games' },
        { key: 'm', text: 'Multimedia', value: 'Multimedia' },
        { key: 'f', text: 'Finance', value: 'Finance' },
      ]
    const handleSubmit = (e) => {
        let newObject = {        
            title: e.target.title.value,
            image: e.target.image.value,
            developer: e.target.developer.value,
            description: e.target.description.value,
            programCategories: [e.target.programCategories.value],
            rating: null,
            comparisonsRef: []
        }
        console.log(newObject)
        
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
                <Form.Field
                    control={Select}
                    options={programCategories}
                    label={{ children: 'Program Categories', htmlFor: 'programCategories' }}
                    placeholder='Program Categories'
                    search
                    searchInput={{ id: 'programCategories' }}
                />
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
                error={{
                    content: 'Please enter a valid url',
                    pointing: 'below',
                }}
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