import React from 'react'

const Comparisons = (props) => {
    console.log(props.compsToDisplay)
    let textToShow = props.compsToDisplay.filter(comp => comp.id === props.programId)
    console.log(textToShow)
    return (
        <div>
            {props.compsToDisplay.id}
        </div>
    )
}

export default Comparisons