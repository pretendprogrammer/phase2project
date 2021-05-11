import React, { useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react'
import Comparisons from './Comparisons'

const CompContainer = (props) => {

    const API = 'http://localhost:3000/'
    const [compsToDisplay, setCompsToDisplay] = useState([])
    let matchedComparisonIds = []

    useEffect(() => {
        if (matchedComparisonIds.length > 0) {
            fetch(API+'comparisons')
            .then(r => r.json())
            .then(result => {
                result = result.filter(compObject => matchedComparisonIds.some(id => id === compObject.id))
                let newValue = []
                result.forEach(object => {
                    newValue.push(object.comparison[0])
                    newValue.push(object.comparison[1])
                })
                setCompsToDisplay(newValue)
            })
        }
    }, [props.selectedPrograms])
    props.selectedPrograms[0].comparisonsRef.forEach(refId => {
        if (props.selectedPrograms[1].comparisonsRef.includes(refId)) {
            matchedComparisonIds.push(refId)
            
        }
    })
    if (matchedComparisonIds.length > 0) {
        return (
            <Card.Group itemsPerRow={2}>
                    <Comparisons programId={props.selectedPrograms[0].id} compsToDisplay={compsToDisplay}/>
                    <Comparisons programId={props.selectedPrograms[1].id} compsToDisplay={compsToDisplay}/>
            </Card.Group>
        )
    } else {
        return (<h1>No Comparisons Currently. Please Add Your Own.</h1>)
    }
   
    
}

export default CompContainer