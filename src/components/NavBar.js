import React, { useState } from 'react'
import { Menu, Message } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';

const NavBar = (props) => {

    const history = useHistory()
    const [loginPrompt, setLoginPrompt] = useState(false)

    return (
        <div style={{paddingBottom: '1%' }}>
            <Menu>
                <Menu.Item
                    name='addProgramButton'
                    onClick={() => {
                        if (props.username !== '') {
                            history.push('/addNewProgram')
                        } else {
                            setLoginPrompt(true)
                            setTimeout(() => setLoginPrompt(false), 2000)
                        }
                    }}
                >
                    Add Program
                </Menu.Item>
                <Menu.Item
                    name='addComparisonButton'
                    onClick={() => {
                        if (props.username !== '') {
                            history.push('/addNewComparison')
                        } else {
                            setLoginPrompt(true)
                            setTimeout(() => setLoginPrompt(false), 2000)
                        }
                    }}
                >
                    Add Comparison
                </Menu.Item>
                <Menu.Item
                    name='clearSelection'
                    onClick={() => props.clearSelections()}>
                    Clear Selections
                </Menu.Item>
                <Menu.Item
                    name='userLoginButton'
                    onClick={() => {props.username === '' ? history.push("/logIn") : props.setUser({username: '', userId: null})}}
                >
                    {props.username === '' ? 'Login' : 'Log Out'}
                </Menu.Item>
            </Menu>
            {loginPrompt ? <Message header='Please log in' content='This feature is only available to registered users. Please log in and try again.'/> : null}
        </div>
    )
}



export default NavBar