import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import CompPage from './components/CompPage'
import NewProgram from './components/NewProgram'
import NewComparison from './components/NewComparison'
import LoginAndRegister from './components/LoginAndRegister';

const API = 'http://localhost:3000/'

class App extends Component{
      state = {
            user: 'no user',
            programsList: [],
            selectedPrograms: [],
            filter: ""
      }

      clearSelections = () => {
            this.setState({
                  selectedPrograms: [],
                  filter: ""
            })
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
            this.setFilter(programObject.programCategories[0])
      }
      
      fetchProgramsList = () => {
            fetch(API+'programs')
            .then(r => r.json())
            .then(programsList => this.setState({programsList}))
      }

      addToProgramsList = (newProgram) => {this.setState({programsList: [...this.state.programsList, newProgram]})}

      applyFilter = () => {
            let programsToDisplay
            if (this.state.filter !== '') {
                  programsToDisplay =  [...this.state.programsList].filter(programObject => programObject.programCategories.includes(this.state.filter))
            } else {
                  programsToDisplay = this.state.programsList
            }
            programsToDisplay = programsToDisplay.filter(programObject => !this.state.selectedPrograms.includes(programObject))
            return programsToDisplay
      }

      render() {

            let programsToDisplay = this.applyFilter()

            return (
                  <Router>
                        <div className='App'>
                              <Switch>
                                    <Route exact path='/'>
                                          <CompPage
                                                user={this.state.user}
                                                programsList={programsToDisplay}
                                                selectedPrograms={this.state.selectedPrograms}
                                                filter={this.state.filter}
                                                fetchProgramsList={this.fetchProgramsList}
                                                addToSelectedPrograms={this.addToSelectedPrograms}
                                                setFilter={this.setFilter}
                                                setUser={this.setUser}
                                                clearSelections={this.clearSelections}/>
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
                                    <Route exact path='/logIn'>
                                          <LoginAndRegister />
                                    </Route>
                              </Switch>
                        </div>
                  </Router>
            )
      }
}


export default App;
