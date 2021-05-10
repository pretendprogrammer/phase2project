import { Component } from "react"
import CardContainer from './CardContainer'
import CompContainer from "./CompContainer"

const API = 'http://localhost:3000/'

class CompPage extends Component {

    state = {
        user: 'no user',
        programsList: [],
        selectedPrograms: []
    }

    componentDidMount() {
        fetch(API+'programs')
        .then(r => r.json())
        .then(programsList => this.setState({programsList}))
    }

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
                <CompContainer selectedPrograms={this.state.selectedPrograms}/>
                <CardContainer addToSelectedPrograms={this.addToSelectedPrograms} programsList={this.state.programsList}/>
            </div>
        )
    }
}

export default CompPage