import { Component } from "react"
import { Grid, Menu, Segment } from "semantic-ui-react"
import CardContainer from './CardContainer'
import ExpandedInfo from "./ExpandedInfo"
import NavBar from "./NavBar"

class CompPage extends Component {

    render() {
        return (
            <Grid>
                <Grid.Column width={3}>
                <Menu color='grey' fluid vertical tabular>
                    <Menu.Item header as='h1'>Sort By</Menu.Item>
                    <Menu.Item 
                        name='All'
                        active={this.props.filter === ''}
                        onClick={() => {
                            this.props.setFilter('')
                        }}
                        />
                    <Menu.Item 
                        name='Dating'
                        active={this.props.filter === 'Dating'}
                        onClick={() => {
                            this.props.setFilter('Dating')
                        }}
                        />
                    <Menu.Item 
                        name='Finance'
                        active={this.props.filter === 'Finance'}
                        onClick={() => {
                            this.props.setFilter('Finance')
                        }}
                        />
                    <Menu.Item 
                        name='Games'
                        active={this.props.filter === 'Games'}
                        onClick={() => {
                            this.props.setFilter('Games')
                        }}
                        />
                    <Menu.Item 
                        name='Multimedia'
                        active={this.props.filter === 'Multimedia'}
                        onClick={() => {
                            this.props.setFilter('Multimedia')
                        }}
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
        )
    }
}

export default CompPage