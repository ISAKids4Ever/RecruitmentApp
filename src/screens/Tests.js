import React, { useEffect } from "react";
import styles from "./Tests.module.css";
import TestQuestion from "../components/TestQuestion";
import TestIntro from "../components/TestIntro";



function View1() {

  const basicQuestions =[{question: "pytanko 1", answear1: "odp 1", answear2: "odp 2", answear3: "odp 3"},
                         {question: "pytanko 2", answear1: "odp 1.2", answear2: "odp 2.2", answear3: "odp 3.2"},
                         {question: "pytanko 3", answear1: "odp 1.3", answear2: "odp 2.3", answear3: "odp 3.3"}
]

  const displayQuestions = [basicQuestions[Math.floor(Math.random()*basicQuestions.length)]]
  console.log(displayQuestions)
  function shuffle(a) {
    for (let i = a.length -1; i>0; i--){
  const j = Math.floor(Math.random()*(i+1));
  [a[i], a[j]] = [a[j], a[i]];}
  return a; }

  useEffect(() => {
    console.log('halko')
    const display = shuffle(basicQuestions)
    
  }, [])

  return (
   <div className={styles.mainDiv1}>
       <TestIntro/>
      { displayQuestions.map((data, index)=>  <TestQuestion question={data.question} answear1={data.answear1} answear2={data.answear2} answear3={data.answear3} key={index}/>)}
       </div>
  
   
  );
}

export default View1;