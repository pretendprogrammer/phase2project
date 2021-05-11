import { Component } from "react"
import CardContainer from './CardContainer'
import ExpandedInfo from "./ExpandedInfo"
import NavBar from "./NavBar"
import NewProgram from "./NewProgram"
import NewComparison from "./NewComparison"


const API = 'http://localhost:3000/'

class CompPage extends Component {

    state = {
        user: 'no user',
        programsList: [],
        selectedPrograms: [],
        filter: ""
    }

    componentDidMount() {
        fetch(API+'programs')
        .then(r => r.json())
        .then(programsList => this.setState({programsList}))
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

    setFilter = (filterSelected) => {
        this.setState({filter: filterSelected})
    }

    setUser = (userSelected) => {
        this.setState({user: userSelected})
    }

    render() {
        return (
            <div>
                <NavBar setFilter={this.setFilter} setUser={this.setUser} user={this.state.user} filter={this.state.filter}/>
                <ExpandedInfo selectedPrograms={this.state.selectedPrograms}/>
                <CardContainer addToSelectedPrograms={this.addToSelectedPrograms} programsList={this.state.programsList}/>
            </div>
        )
    }
}


{/* <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router> */}



export default CompPage