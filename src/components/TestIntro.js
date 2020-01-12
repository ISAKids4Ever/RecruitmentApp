import React, { useState } from 'react';
import styles from './TestIntro.module.css';


function TestIntro() {
    const [hidden, setHidden] = useState('visible')
    if (hidden === 'none'){
        return null
    } else {
    return (
        <div className={styles.intro}>
          <p> Test składa się z 10 losowych pytań. Wybierz język programowania/technologię!</p>
          <div className={styles.languages}>
              <div className={styles.language}><i className='fab fa-js-square'></i></div>
              <div className={styles.language}>HTML</div>
              <div className={styles.language}>CSS</div>
              <div className={styles.language}>React</div>    
          </div>
          <p onClick={() => setHidden('none')} className={styles.start}>Rozpocznij test!</p>
        </div>
    );
}
}

export default TestIntro;
