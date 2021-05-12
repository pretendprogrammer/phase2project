import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import CompPage from './components/CompPage'
import NewProgram from './components/NewProgram'
import NewComparison from './components/NewComparison'

const API = 'http://localhost:3000/'

class App extends Component{
      state = {
            user: 'no user',
            programsList: [],
            selectedPrograms: [],
            filter: ""
      }

      componentDidMount() {
            this.fetchProgramsList()
      }

      setUser = (userSelected) => {
            this.setState({user: userSelected})
      }

      setFilter = (filterSelected) => {
            this.setState({filter: filterSelected})
      }
      
      // THIS FUNCTION IS PASSED DOWN TO EACH PROGRAM CARD TO ADD IT TO THE STATE IN THIS SCOPE
      addToSelectedPrograms = (programObject) => {
            if (this.state.selectedPrograms.length === 2) {
                  this.setState({selectedPrograms: this.state.selectedPrograms.shift()})
            }
            let newSelectedProgramsArray = [...this.state.selectedPrograms]
            newSelectedProgramsArray.push(programObject)
            this.setState({selectedPrograms: newSelectedProgramsArray})
      }
      
      fetchProgramsList = () => {
            fetch(API+'programs')
            .then(r => r.json())
            .then(programsList => this.setState({programsList}))
      }

      addToProgramsList = (newProgram) => {this.setState({programsList: [...this.state.programsList, newProgram]})}

      render() {
            return (
                  <Router>
                        <div className='App'>
                              <Switch>
                                    <Route exact path='/'>
                                          <CompPage
                                                user={this.state.user}
                                                programsList={this.state.programsList}
                                                selectedPrograms={this.state.selectedPrograms}
                                                filter={this.state.filter}
                                                fetchProgramsList={this.fetchProgramsList}
                                                addToSelectedPrograms={this.addToSelectedPrograms}
                                                setFilter={this.setFilter}
                                                setUser={this.setUser}/>
                                    </Route>
                                    <Route exact path='/addNewProgram'>
                                          <NewProgram addToProgramsList={this.addToProgramsList}/>
                                    </Route>
                                    <Route exact path='/addNewComparison'>
                                          <NewComparison
                                                fetchProgramsList={this.fetchProgramsList}
                                                selectedPrograms={this.state.selectedPrograms}
                                                programsList={this.state.programsList}
                                                addToSelectedPrograms={this.addToSelectedPrograms}/>
                                    </Route>
                              </Switch>
                        </div>
                  </Router>
            )
      }
}


export default App;
