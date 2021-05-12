import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const LoginAndRegister = (props) => {

    return (
        <Form>
            <Form.Field>
            <label>Username</label>
            <input placeholder='Enter your username' />
            </Form.Field>
            <Button type='submit'>Log In</Button>
        </Form>
    )
}

export default LoginAndRegister