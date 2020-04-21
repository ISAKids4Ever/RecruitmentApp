import React from 'react';
import { Button } from 'components';

export function BackButton({ setElementToShow, setUserPoints, setCurrentPage }) {
    return (
        <Button onClick={() => {
            setElementToShow('TestIntro')
            setUserPoints(new Array(10).fill(0))
            setCurrentPage(1)
        }} children='Wyjdź z tego testu'></Button>
    )

}
