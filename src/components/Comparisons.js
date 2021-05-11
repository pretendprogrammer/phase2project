import React from 'react'

const Comparisons = (props) => {
    let textToShow = props.compsToDisplay.filter(comp => comp.id === props.programId)
    return (
        <div>
            {textToShow.map(comp => (
                <h3>{comp.text}</h3>
            ))}
        </div>
    )
}

export default Comparisons