import React from 'react';
import styles from './TestIntro.module.css';
import Button from './Button'
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'


function TestIntro(props) {
    const { setElementToShow } = props;
    return (
        <div className={styles.intro}>
            <p> Test składa się z 10 losowych pytań. Wybierz język programowania/technologię!</p>
            <div className={styles.languages}>
                <Button className={'iconButton iconButtonTest'}><i className='fa-js-square'><FaJsSquare/></i></Button>
                <Button className={'iconButton iconButtonTest'}><i className='fa-html5'><FaHtml5 /></i></Button>
                <Button className={'iconButton iconButtonTest'}><i className='fa-css3-alt'><FaCss3Alt /></i></Button>
                <Button className={'iconButton iconButtonTest'}><i className='fa-react'><FaReact/></i></Button>
            </div>
            <Button onClick={() => {
                setElementToShow('TestQuestion')
            }} >Rozpocznij test!</Button>
        </div>
    )
}

export default TestIntro;
