import React from 'react';
import Button from './Button';

function BackButton(props) {
    const { setElementToShow, setUserPoints, setCurrentPage } = props;
    return (
        <Button onClick={() => {
            setElementToShow('TestIntro')
            setUserPoints([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
            setCurrentPage(1)
        }} children='Wróć do instrukcji'></Button>
    )

}

export default BackButton;
