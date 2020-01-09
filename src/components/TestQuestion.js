import * as React from 'react';
import styles from './TestQuestion.module.css'


function TestQuestion(props) {
    const { question, answear1, answear2, answear3} = props
    return (
        <div className={styles.testView}>
           <div className={styles.question}>{question}</div>
           <div className={styles.answears}>
               <ul>
                   <li>{answear1}</li>
                   <li>{answear2}</li>
                   <li>{answear3}</li>
               </ul>
           </div>
           <div className={styles.questionNumber}>
               <div className={styles.arrow}> PREV </div>
               1 2 3 4 5 6 7 8 9 10
               <div className={styles.arrow}> NEXT </div>
               </div>
        </div>
    );
}

export default TestQuestion;
