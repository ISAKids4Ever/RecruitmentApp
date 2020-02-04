import React from 'react'
import Button from './Button';

function TestResults(props) {
    const {elementToShow, setElementToShow, userPoints} = props;
    if(elementToShow === 'TestResults'){
    return (
        <div>
    <div>{userPoints.reduce(function(prevPoints, currentPoint)  { return prevPoints + currentPoint}, 0)}</div>
            <Button children='Wróć do testów' onClick={() => setElementToShow('TestIntro')}></Button>
            
        </div>
    )} else {
        return null
    }
}

export default TestResults;
