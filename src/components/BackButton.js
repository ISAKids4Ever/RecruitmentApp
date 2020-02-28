import React from 'react';
import { Button } from './';

function BackButton(props) {
    const { setElementToShow, setUserPoints, setCurrentPage } = props;
    return (
        <Button onClick={() => {
            setElementToShow('TestIntro')
            setUserPoints(new Array(10).fill(0))
            setCurrentPage(1)
        }} children='Wróć do instrukcji'></Button>
    )

}

export default BackButton;
