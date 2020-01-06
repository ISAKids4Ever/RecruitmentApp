import React from 'react';
import styles from './Forum.module.css'
import Question from '../components/Question'
import { database } from 'firebase';


function Forum() {

  const RandomQuestions = [{question: "PYTANIE PIERWSZE"},{question: "PYTANIE DRUGIE"}, {question: "PYTANIE TRZECIE"}]

 
  return (
    <div className={styles.mainDiv3}>
      <div>FILTRY</div>
    {  RandomQuestions.map((data, index)=>  <Question question={data.question} key={index}/>)}
    
       </div>
  );
}

export default Forum;