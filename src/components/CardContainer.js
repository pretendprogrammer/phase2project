import { Component } from "react";
import ProgramCard from './ProgramCard'
import { Card } from 'semantic-ui-react'

class CardContainer extends Component {

    render() {
        return (
            <Card.Group itemsPerRow={5}>
                {this.props.programsList.map(programObject => <ProgramCard addToSelectedPrograms={this.props.addToSelectedPrograms} programObject={programObject}/>)}
            </Card.Group>
        )
    }
}

export default CardContainer