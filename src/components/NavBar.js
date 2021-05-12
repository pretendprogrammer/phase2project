import React from 'react'
import { Menu } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
/* Add NavLink to importer */
import { BrowserRouter as Router, Route, NavLink, Link, useHistory } from 'react-router-dom';

const NavBar = (props) => {

    const history = useHistory()

    return (
        <Menu>
                <select>
                    <option value="None">None</option>
                    <option value="Dating">Dating</option>
                    <option value="Games">Games</option>
                    <option value="Multimedia">Multimedia</option>
                    <option value="Finance">Finance</option>
                </select>
            
            <Menu.Item
                name='addProgramButton'
                onClick={() => history.push("/addNewProgram")}
            >
                Add Program
            </Menu.Item>
            <Menu.Item
                name='addComparisonButton'
                onClick={() => history.push("/addNewComparison")}
            >
                Add Comparison
            </Menu.Item>
            <Menu.Item
                name='userLoginButton'
            >
                User Login
            </Menu.Item>
        </Menu>
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