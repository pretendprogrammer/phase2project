import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Form, Button, Segment, Header, Divider, Grid, Message } from 'semantic-ui-react'

const LoginAndRegister = (props) => {
    
    const [badLogin, setBadLogin] = useState(false)
    const [badRegister, setBadRegister] = useState(false)
    const history = useHistory()
    let foundUserObject

    const checkIfUserExists = (userString) => {

        return fetch(props.API+'users')
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
                 setBadLogin(true)
                 setTimeout(() => setBadLogin(false), 3000)
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
                fetch(props.API+'users', postConfig)
                  .then(r => r.json())
                  .then(postedUserObject => {
                      props.setUser(postedUserObject)
                      history.push('/')
                  })
             } else {
                 setBadRegister(true)
                 setTimeout(() => setBadRegister(false), 3000)
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
                        {badLogin ? <Message negative header='User does not exist' content="This user is not registered. Try again, or register a new user" /> : null}
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
                        {badRegister ? <Message negative header='User already exists' content="This user is already registered. Log in with this user, or create a different user." /> : null}
                    </Grid.Column>
                </Grid>
                <Divider vertical>Or</Divider>
            </Segment>

    )
}

export default LoginAndRegister