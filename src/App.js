import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import CompPage from './components/CompPage'
import NewProgram from './components/NewProgram'
import NewComparison from './components/NewComparison'
import LoginAndRegister from './components/LoginAndRegister';
import TitleAndHomeLink from './components/TitleAndHomeLink';

const API = 'http://localhost:3000/'

class App extends Component{
      state = {
            username: '',
            userId: null,
            programsList: [],
            selectedPrograms: [],
            filter: ""
      }

      setUser = (userObject) => {
            this.setState({
                  username: userObject.username,
                  userId: userObject.id
            })
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

      setFilter = (filterSelected) => {
            this.setState({filter: filterSelected})
            if (this.state.selectedPrograms.length > 0 && this.state.selectedPrograms[0].programCategories[0] !== filterSelected) {
                  this.setState({selectedPrograms: []})
            }
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
            .sort((programObject1, programObject2) => programObject2.rating - programObject1.rating)
            return programsToDisplay
      }

      render() {

            let programsToDisplay = this.applyFilter()

            return (
                  <Router>
                        <div className='App'>
                              <Route path='/'>
                                    <TitleAndHomeLink clearSelections={this.clearSelections} />
                              </Route>
                              <Switch>
                                    <Route exact path='/'>
                                          <CompPage
                                                username={this.state.username}
                                                userId={this.state.userId}
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
                                          <NewProgram userId={this.state.userId} addToProgramsList={this.addToProgramsList}/>
                                    </Route>
                                    <Route exact path='/addNewComparison'>
                                          <NewComparison
                                                fetchProgramsList={this.fetchProgramsList}
                                                selectedPrograms={this.state.selectedPrograms}
                                                programsList={programsToDisplay}
                                                addToSelectedPrograms={this.addToSelectedPrograms}
                                                userId={this.state.userId}
                                                setFilter={this.setFilter}
                                                filter={this.state.filter}/>
                                    </Route>
                                    <Route exact path='/logIn'>
                                          <LoginAndRegister setUser={this.setUser} />
                                    </Route>
                              </Switch>
                        </div>
                  </Router>
            )
      }
}


export default App;
