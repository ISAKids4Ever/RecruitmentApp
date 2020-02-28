import React from 'react'
import {Button} from '../components'

function SubmitTestButton(props) {
    const { setElementToShow, setCurrentPage } = props;
    return (
        <Button className={'regularButton submitButton'} children={'Zakończ'} onClick={() => {
            setElementToShow('TestResults')
            setCurrentPage(1)
        }}>
        </Button>
    )
}



export default SubmitTestButton
