import React from 'react'
import Button from './Button';

function TestResults(props) {
    const {elementToShow, setElementToShow} = props;
    if(elementToShow === 'TestResults'){
    return (
        <div>
            WYNIKI
            <Button children='Wróć do testów' onClick={() => setElementToShow('TestIntro')}></Button>
            
        </div>
    )} else {
        return null
    }
}

export default TestResults;
