import React from 'react'
import Button from './Button';

function TestResults(props) {
    const { setElementToShow, userPoints, setCurrentPage } = props;
    return (
        <div>
            <div>{userPoints.reduce(function (prevPoints, currentPoint) {
                return prevPoints + currentPoint
            }, 0)}
            </div>
            <Button children='Wróć do testów' onClick={() => {
                setElementToShow('TestIntro')
                setCurrentPage(1)
            }}></Button>

        </div>
    )
}

export default TestResults;
