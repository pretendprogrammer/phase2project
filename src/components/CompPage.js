import { Component } from "react"
import { Grid, Menu, Segment } from "semantic-ui-react"
import CardContainer from './CardContainer'
import ExpandedInfo from "./ExpandedInfo"
import NavBar from "./NavBar"

class CompPage extends Component {

    state = { activeItem: '' }

    handleItemClick = (name) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <Grid>
                <Grid.Column width={3}>
                <Menu fluid vertical tabular>
                    <Menu.Item header as='h1'>Sort By</Menu.Item>
                    <Menu.Item 
                        name='Dating'
                        active={activeItem === 'Dating'}
                        onClick={(e, {name}) => {
                            this.props.setFilter('Dating')
                            this.handleItemClick(name)
                        }}
                        />
                    <Menu.Item 
                        name='Finance'
                        active={activeItem === 'Finance'}
                        onClick={(e, {name}) => {
                            this.props.setFilter('Finance')
                            this.handleItemClick(name)
                        }}
                        />
                    <Menu.Item 
                        name='Games'
                        active={activeItem === 'Games'}
                        onClick={(e, {name}) => {
                            this.props.setFilter('Games')
                            this.handleItemClick(name)
                        }}
                        />
                    <Menu.Item 
                        name='Multimedia'
                        active={activeItem === 'Multimedia'}
                        onClick={(e, {name}) => {
                            this.props.setFilter('Multimedia')
                            this.handleItemClick(name)
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