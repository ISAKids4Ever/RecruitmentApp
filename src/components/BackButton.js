import React from 'react';
import Button from './Button';

function BackButton(props) {
    const {elementToShow, setElementToShow, value} = props;
    if(elementToShow === 'TestQuestion'){
        return (
            <Button onClick={() => setElementToShow('TestIntro')}>{value}</Button>
        )
    } else {
        return null;
    }
    
}

export default BackButton;
