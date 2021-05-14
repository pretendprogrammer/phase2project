import { Component } from "react"
import { Grid, Menu, Segment } from "semantic-ui-react"
import CardContainer from './CardContainer'
import ExpandedInfo from "./ExpandedInfo"
import NavBar from "./NavBar"

class CompPage extends Component {

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={3}>
                        <Menu fluid vertical tabular>
                            <Menu.Item 
                                name='All'
                                onClick={() => this.props.setFilter('')}
                                />
                            <Menu.Item 
                                name='Dating'
                                onClick={() => this.props.setFilter('Dating')}
                                />
                            <Menu.Item 
                                name='Finance'
                                onClick={() => this.props.setFilter('Finance')}
                                />
                            <Menu.Item 
                                name='Games'
                                onClick={() => this.props.setFilter('Games')}
                                />
                            <Menu.Item 
                                name='Multimedia'
                                onClick={() => this.props.setFilter('Multimedia')}
                                />
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Segment>
                            <NavBar clearSelections={this.props.clearSelections} setURLPath={this.props.setURLPath} setUser={this.props.setUser} username={this.props.username}/>
                        </Segment>
                        <ExpandedInfo selectedPrograms={this.props.selectedPrograms}/>
                        <Segment>
                            <CardContainer addToSelectedPrograms={this.props.addToSelectedPrograms} programsList={this.props.programsList}/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default CompPage