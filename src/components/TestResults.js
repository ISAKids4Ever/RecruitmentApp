import React from 'react'

import { Button } from './';

export function TestResults({ setElementToShow, userPoints, setCurrentPage, timeHasGone, elementToShow }) {
    return (
        <div>
            <section>{userPoints.reduce(function (prevPoints, currentPoint) {
                return prevPoints + currentPoint
            }, 0)}
            </section>
            {timeHasGone && <section>Your time is up!</section>}
            <Button children='Wróć do testów' onClick={() => {
                setElementToShow('TestIntro')
                setCurrentPage(1)
            }}></Button>

        </div>
    )
}
