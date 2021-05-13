import React, { useState } from 'react'
import { Form, Button, Segment, Header, Divider, Grid } from 'semantic-ui-react'

const API = 'http://localhost:3000/users'

const LoginAndRegister = (props) => {

    const checkIfUserExists = (userString) => {

        return fetch(API)
            .then(r => r.json())
            .then(fetchedArray => {
                if (fetchedArray.find(userObject => userObject.username === userString)) {
                    return true
                } else {
                    return false
                }
            })
    }

    const login = (e) => {
        checkIfUserExists(e.target.loginInput.value)
        .then(booleanResult => {
             if (booleanResult === true) {
                console.log("User can login")
             } else {
                 alert('User does not exist')
             }
            })
    }

    const register = (e) => {
        checkIfUserExists(e.target.registerInput.value)
        .then(booleanResult => {
             if (booleanResult === false) {
                console.log("User can register")
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