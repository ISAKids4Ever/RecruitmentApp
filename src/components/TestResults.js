import React from 'react'

function TestResults(props) {
    const {elementToShow, setEelementToShow} = props;
    if(elementToShow === 'TestResults'){
    return (
        <div>
            WYNIKI
            
        </div>
    )} else {
        return null
    }
}

export default TestResults;
