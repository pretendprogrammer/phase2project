import React, { useEffect, useState } from 'react'
import Comparisons from './Comparisons'

const CompContainer = (props) => {
    console.log(props.selectedPrograms)

    const API = 'http://localhost:3000/'
    const [compsToDisplay, setCompsToDisplay] = useState([])
    let matchedComparisonIds = []

    useEffect(() => {
        console.log("id's are: "+matchedComparisonIds)
        if (matchedComparisonIds.length > 0) {
            fetch(API+'comparisons')
            .then(r => r.json())
            .then(result => {
                matchedComparisonIds.forEach(id => {
                    let newValue = []
                    newValue.push(result[id-1].comparison[0])
                    newValue.push(result[id-1].comparison[1])
                    setCompsToDisplay(newValue)
                })
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
            <div>
                <Comparisons programId={props.selectedPrograms[0].id} compsToDisplay={compsToDisplay}/>
                <Comparisons programId={props.selectedPrograms[1].id} compsToDisplay={compsToDisplay}/>
            </div>
        )
    } else {
        return (<h1>No Comparisons Currently. Please Add Your Own.</h1>)
    }
   
    
}

export default CompContainer