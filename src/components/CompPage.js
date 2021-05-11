import { Component } from "react"
import CardContainer from './CardContainer'
import ExpandedInfo from "./ExpandedInfo"

const API = 'http://localhost:3000/'

class CompPage extends Component {

    state = {
        user: 'no user',
        programsList: [],
        selectedPrograms: [],
        compsToDisplay: []
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

    render() {
        return (
            <div>
                <ExpandedInfo compsToDisplay={this.state.compsToDisplay} selectedPrograms={this.state.selectedPrograms}/>
                <CardContainer addToSelectedPrograms={this.addToSelectedPrograms} programsList={this.state.programsList}/>
            </div>
        )
    }
}

export default CompPage