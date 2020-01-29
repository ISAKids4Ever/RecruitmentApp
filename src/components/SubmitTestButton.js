import React from 'react'
import Button from '../components/Button'

function SubmitTestButton(props) {
    const { elementToShow, setElementToShow, currentPage, lastQuestion} = props;
    if(currentPage === lastQuestion && elementToShow === 'TestQuestion'){
        return (
            <Button children={'Zakończ'} onClick={() => setElementToShow('TestResults')}>
     
            </Button>
         )
    } else{
        return null
    }
    }
    


export default SubmitTestButton
