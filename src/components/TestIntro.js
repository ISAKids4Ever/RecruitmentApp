import React, { useState } from 'react';
import styles from './TestIntro.module.css';
import Button from './Button'


function TestIntro(props) {
    const { elementToShow, setElementToShow} = props;
    if (elementToShow === 'TestIntro'){
        return (
            <div className={styles.intro}>
          <p> Test składa się z 10 losowych pytań. Wybierz język programowania/technologię!</p>
          <div className={styles.languages}>
              <Button className={'iconButton iconButtonTest'}><i className='fab fa-js-square'></i></Button>
              <Button className={'iconButton iconButtonTest'}><i className='fab fa-html5'></i></Button>
              <Button className={'iconButton iconButtonTest'}><i className='fab fa-css3-alt'></i></Button>
              <Button className={'iconButton iconButtonTest'}><i className='fab fa-react'></i></Button>  
          </div>
          <Button onClick={() => {
              setElementToShow('TestQuestion')
              }} >Rozpocznij test!</Button>
        </div>
        )
    } else {
    return null;
}
}

export default TestIntro;
