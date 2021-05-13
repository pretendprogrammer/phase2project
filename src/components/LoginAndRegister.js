import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Form, Button, Segment, Header, Divider, Grid } from 'semantic-ui-react'

const API = 'http://localhost:3000/users'


const LoginAndRegister = (props) => {
    
    const history = useHistory()
    let foundUserObject

    const checkIfUserExists = (userString) => {

        return fetch(API)
            .then(r => r.json())
            .then(fetchedArray => {
                foundUserObject = fetchedArray.find(userObject => userObject.username === userString)
            })
    }

    const login = (e) => {
        checkIfUserExists(e.target.loginInput.value)
        .then(() => {
             if (foundUserObject !== undefined) {
                props.setUser(foundUserObject)
                history.push('/')
             } else {
                 alert('User does not exist')
             }
            })
    }

    const register = (e) => {
        checkIfUserExists(e.target.registerInput.value)
        .then(() => {
             if (foundUserObject === undefined) {
                let newUserObject = {
                    username: e.target.registerInput.value
                }
                let postConfig = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUserObject),
                  }
                fetch(API, postConfig)
                  .then(r => r.json())
                  .then(postedUserObject => {
                      props.setUser(postedUserObject)
                      history.push('/')
                  })
             } else {
                 alert('User already exists')
             }
            })
    }

    return (
        <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Header as='h2'>Existing User</Header>
                    <Form onSubmit={login}>
                        <Form.Input
                            id='loginInput'
                            icon='user'
                            iconPosition='left'
                            label='Username'
                            placeholder='Username'
                        />
                        <Button type='submit' content='Login' primary />
                    </Form>
                </Grid.Column>
                <Grid.Column verticalAlign='middle'>
                    <Header as='h2'>New User</Header>
                    <Form onSubmit={register}>
                        <Form.Input
                            id='registerInput'
                            icon='user'
                            iconPosition='left'
                            label='Username'
                            placeholder='Username'
                        />
                        <Button content='Register' primary />
                    </Form>
                </Grid.Column>
            </Grid>
            <Divider vertical>Or</Divider>
        </Segment>
    )
}

export default LoginAndRegister