import React, { useState } from 'react';
import styles from './TestIntro.module.css';
import Button from './Button'


function TestIntro() {
    const [hidden, setHidden] = useState('visible')
    if (hidden === 'none'){
        return null
    } else {
    return (
        <div className={styles.intro}>
          <p> Test składa się z 10 losowych pytań. Wybierz język programowania/technologię!</p>
          <div className={styles.languages}>
              <Button className={'iconButton '}><i className='fab fa-js-square'></i></Button>
              <Button className={'iconButton'}>HTML</Button>
              <Button className={'iconButton'}>CSS</Button>
              <Button className={'iconButton'}>React</Button>  
          </div>
          <Button onClick={() => setHidden('none')} >Rozpocznij test!</Button>
        </div>
    );
}
}

export default TestIntro;
