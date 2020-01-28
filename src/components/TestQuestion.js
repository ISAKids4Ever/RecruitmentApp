import * as React from 'react';
import styles from './TestQuestion.module.css'


function TestQuestion(props) {
    const { question, answear1, answear2, answear3, elementToShow} = props;
    let classChange;
    if(elementToShow === 'TestQuestion') {
        return (
            <div className={styles.testView}>
               <div className={styles.question}>{question}</div>
               <div className={styles.answears}>
                   <ul>
                       <li >{answear1.value}</li>
                       <li >{answear2.value}</li>
                       <li >{answear3.value}</li>
                   </ul>
               </div>
              
            </div>
        );
    } else {
        return null;
    }
    
}

export default TestQuestion;
