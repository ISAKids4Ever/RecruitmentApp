import * as React from 'react';
import styles from './TestQuestion.module.css'


export function TestQuestion(props) {
    const { question, answear1, answear2, answear3, elementToShow, userPoints, setPoints, currentPage} = props;
    function calculatePoints(currentPage, answear){
        const points = [...userPoints]
        if (answear.correct === true){
            points[currentPage] = 1;
        } else {
            points[currentPage] = 0;
        }
        setPoints(points);
    }
    if(elementToShow === 'TestQuestion') {
        return (
            <div className={styles.testView}>
               <div className={styles.question}>{question}</div>
               <div className={styles.answears}>
                   <ul>
                       <li onClick={() => calculatePoints(currentPage, answear1)}>{answear1.value}</li>
                       <li onClick={() => calculatePoints(currentPage, answear2)}>{answear2.value}</li>
                       <li onClick={() => calculatePoints(currentPage, answear3)}>{answear3.value}</li>
                   </ul>
               </div>
              
            </div>
        );
    } else {
        return null;
    }   
}
