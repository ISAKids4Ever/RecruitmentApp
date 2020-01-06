import React from 'react';
import styles from './Forum.module.css'
import Question from '../components/Question'
import { database } from 'firebase';


function Forum() {

  const RandomQuestions = [{question: "PYTANIE PIERWSZE", date:"14-05-2015", lastRespDate:"15-09-2019", likes: "11", respAmount:"9"},
                           {question: "PYTANIE DRUGIE", date:"25-08-2009", lastRespDate:"22-10-2010", likes: "69", respAmount: "55"},
                           {question: "PYTANIE TRZECIE", date:"22-09-1994", lastRespDate:"11-11-2011", likes:"6969", respAmount:"99"}]

 
  return (
    <div className={styles.mainDiv}>
      <div>FILTRY</div>
    {  RandomQuestions.map((data, index)=>  <Question question={data.question} date={data.date} lastRespDate={data.lastRespDate} likes={data.likes} respAmount={data.respAmount} key={index}/>)}
    
       </div>
  );
}

export default Forum;