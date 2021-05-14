import React, { useState } from 'react'
import { Menu, Message } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
/* Add NavLink to importer */
import { BrowserRouter as Router, Route, NavLink, Link, useHistory } from 'react-router-dom';

const NavBar = (props) => {

    const history = useHistory()
    const [loginPrompt, setLoginPrompt] = useState(false)

    return (
        <div style={{paddingBottom: '1%' }}>
            <Menu>
                    {/* <select onChange={(e) => props.setFilter(e.target.value)}>
                        <option value="">No Filter</option>
                        <option value="Dating">Dating</option>
                        <option value="Games">Games</option>
                        <option value="Multimedia">Multimedia</option>
                        <option value="Finance">Finance</option>
                    </select> */}
                
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

// const link = {
//     width: '100px',
//     padding: '12px',
//     margin: '0 6px 6px',
//     background: 'blue',
//     textDecoration: 'none',
//     color: 'white',
//   }
  

//   <NavLink
// to="/newComparison"
// exact
// style={link}
// activeStyle={{
//     background: 'darkblue'
// }}
// >Add Comparison
// </NavLink>



export default NavBar