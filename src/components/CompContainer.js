import React from 'react'
import Comparisons from './Comparisons'

const CompContainer = (props) => {

    const API = 'http://localhost:3000/'
    let compsToDisplay = []

    let currentComparisons = []
    if (props.selectedPrograms.length === 2) {
        props.selectedPrograms[0].comparisonsRef.forEach(refId => {
            if (props.selectedPrograms[1].comparisonsRef.includes(refId)) {
                currentComparisons.push(refId)
            }
        })
        if (currentComparisons.length > 0) {
            fetch(API+'comparisons')
            .then(r => r.json())
            .then(result => {
                console.log(currentComparisons.length)
                currentComparisons.forEach(id => compsToDisplay.push(result[id-1].comparison))
                console.log(compsToDisplay)
                return(
                    <div>
                        <Comparisons programId={props.selectedPrograms[0].id} compsToDisplay={compsToDisplay}/>
                        <Comparisons programId={props.selectedPrograms[1].id} compsToDisplay={compsToDisplay}/>
                    </div>
                )
            })
        } else {
            return (null)
        }
    } else {
        return (null)
    }
    
}

export default CompContainer