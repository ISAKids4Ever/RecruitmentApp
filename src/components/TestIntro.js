import * as React from 'react';
import styles from './TestIntro.module.css';


function TestIntro(props) {
    const { display } = props
    if (display === "none"){
        return null
    } else {
    return (
        <div className={styles.intro}>
          <p> Test składa się z 10 losowych pytań. Wybierz język programowania/technologię!</p>
          <div className={styles.languages}>
              <div className={styles.language}><i className="fab fa-js-square"></i></div>
              <div className={styles.language}>HTML</div>
              <div className={styles.language}>CSS</div>
              <div className={styles.language}>React</div>    
          </div>
          <p>Test rozpocznie się za ...</p>
        </div>
    );
}
}

export default TestIntro;
