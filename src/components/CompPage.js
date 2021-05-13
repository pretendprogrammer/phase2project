import { Component } from "react"
import CardContainer from './CardContainer'
import ExpandedInfo from "./ExpandedInfo"
import NavBar from "./NavBar"

class CompPage extends Component {

    render() {
        return (
            <div>
                <NavBar clearSelections={this.props.clearSelections} setURLPath={this.props.setURLPath} setFilter={this.props.setFilter} setUser={this.props.setUser} username={this.props.username} filter={this.props.filter}/>
                <ExpandedInfo selectedPrograms={this.props.selectedPrograms}/>
                <CardContainer addToSelectedPrograms={this.props.addToSelectedPrograms} programsList={this.props.programsList}/>
            </div>
        )
    }
}

export default CompPage