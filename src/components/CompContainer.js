import React, { useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react'
import Comparisons from './Comparisons'

const CompContainer = (props) => {

    const API = 'http://localhost:3000/'
    const [compsToDisplay, setCompsToDisplay] = useState([])
    let matchedComparisonIds = []

    const [usersArray, setUsersArray] = useState([])

    useEffect(() => {
        fetch(API+'users')
        .then(r => r.json())
        .then(fetchedUsersArray => {setUsersArray(fetchedUsersArray)})
    }, [props.selectedPrograms])

    useEffect(() => {
        if (matchedComparisonIds.length > 0) {
            fetch(API+'comparisons')
            .then(r => r.json())
            .then(result => {
                result = result.filter(compObject => matchedComparisonIds.some(id => id === compObject.id))
                setCompsToDisplay(result)
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
                    <Comparisons usersArray={usersArray} programId={props.selectedPrograms[0].id} compsToDisplay={compsToDisplay}/>
                    <Comparisons usersArray={usersArray} programId={props.selectedPrograms[1].id} compsToDisplay={compsToDisplay}/>
            </Card.Group>
        )
    } else {
        return (<h1>No Comparisons Currently. Please Add Your Own.</h1>)
    }
   
    
}

export default CompContainer