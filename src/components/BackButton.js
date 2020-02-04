import React from 'react';
import Button from './Button';

function BackButton(props) {
    const {elementToShow, setElementToShow, setUserPoints, setCurrentPage} = props;
    if(elementToShow === 'TestQuestion'){
        return (
            <Button onClick={() => {
                setElementToShow('TestIntro')
                setUserPoints([0,0,0,0,0,0,0,0,0,0])
                setCurrentPage(1)}} children='Wróć do instrukcji'></Button>
        )
    } else {
        return null;
    }
    
}

export default BackButton;
