import React from 'react';
import Button from './Button';

function BackButton(props) {
    const {elementToShow, setElementToShow} = props;
    if(elementToShow === 'TestQuestion'){
        return (
            <Button onClick={() => setElementToShow('TestIntro')}>Wróć do instrukcji</Button>
        )
    } else {
        return null;
    }
    
}

export default BackButton;
