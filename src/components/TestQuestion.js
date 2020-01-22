import * as React from 'react';
import styles from './TestQuestion.module.css'


function TestQuestion(props) {
    const { question, answear1, answear2, answear3} = props
    return (
        <div className={styles.testView}>
           <div className={styles.question}>{question}</div>
           <div className={styles.answears}>
               <ul>
                   <li onClick={()=> console.log(answear1.correct)}>{answear1.value}</li>
                   <li onClick={()=> console.log(answear2.correct)}>{answear2.value}</li>
                   <li onClick={()=> console.log(answear3.correct)}>{answear3.value}</li>
               </ul>
           </div>
          
        </div>
    );
}

export default TestQuestion;
