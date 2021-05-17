import { Component } from "react"
import { Grid, Menu, Segment } from "semantic-ui-react"
import CardContainer from './CardContainer'
import ExpandedInfo from "./ExpandedInfo"
import NavBar from "./NavBar"
import SortingSidebar from './SortingSidebar'

class CompPage extends Component {

    render() {
        return (
            <Grid>
                <SortingSidebar setFilter={this.props.setFilter} filter={this.props.filter} />
                <Grid.Column width={13}>
                    <Segment>
                        <NavBar clearSelections={this.props.clearSelections} setURLPath={this.props.setURLPath} setUser={this.props.setUser} username={this.props.username}/>
                    </Segment>
                    <ExpandedInfo API={this.props.API} selectedPrograms={this.props.selectedPrograms}/>
                    <Segment>
                        <CardContainer addToSelectedPrograms={this.props.addToSelectedPrograms} programsList={this.props.programsList}/>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

export default CompPage