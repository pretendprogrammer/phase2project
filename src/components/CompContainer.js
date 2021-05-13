import React, { useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react'
import Comparisons from './Comparisons'

const CompContainer = (props) => {

    const API = 'http://localhost:3000/'
    const [compsToDisplay, setCompsToDisplay] = useState([])
    const [compUsers, setCompUsers] = useState([])
    let matchedComparisonIds = []

    const [usersArray, setUsersArray] = useState([])
    useEffect(() => {
        fetch(API+'users')
        .then(r => r.json())
        .then(fetchedUsersArray => {setUsersArray(fetchedUsersArray)})
    }, [])

    useEffect(() => {
        if (matchedComparisonIds.length > 0) {
            fetch(API+'comparisons')
            .then(r => r.json())
            .then(result => {
                result = result.filter(compObject => matchedComparisonIds.some(id => id === compObject.id))
                let newCompsValue = []
                let newUsersValue = []
                result.forEach(object => {
                    newCompsValue.push(object.comparison[0])
                    newUsersValue.push(object.userId)
                    newCompsValue.push(object.comparison[1])
                    newUsersValue.push(object.userId)
                })
                setCompsToDisplay(newCompsValue)
                setCompUsers(newUsersValue)
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
                    <Comparisons usersArray={usersArray} compSort={0} programId={props.selectedPrograms[0].id} compUsers={compUsers} compsToDisplay={compsToDisplay}/>
                    <Comparisons usersArray={usersArray} compSort={1} programId={props.selectedPrograms[1].id} compUsers={compUsers} compsToDisplay={compsToDisplay}/>
            </Card.Group>
        )
    } else {
        return (<h1>No Comparisons Currently. Please Add Your Own.</h1>)
    }
   
    
}

export default CompContainer