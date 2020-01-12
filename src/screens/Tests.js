import React, { useEffect, useState } from "react";
import styles from "./Tests.module.css";
import TestQuestion from "../components/TestQuestion";
import TestIntro from "../components/TestIntro";


function View1() {

  const basicQuestions =[{question: "pytanko 1", answear1: "odp 1", answear2: "odp 2", answear3: "odp 3"},
                         {question: "pytanko 2", answear1: "odp 1.2", answear2: "odp 2.2", answear3: "odp 3.2"},
                         {question: "pytanko 3", answear1: "odp 1.3", answear2: "odp 2.3", answear3: "odp 3.3"}
]
const [questionsToShuffle, setQuestionsToShuffle] = useState(basicQuestions)

  function shuffle(a) {
    const newQuestions = [...a]
    for (let i = newQuestions.length -1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [newQuestions[i], newQuestions[j]] = [newQuestions[j], newQuestions[i]];}
    setQuestionsToShuffle(newQuestions)
    console.log(newQuestions)
 }

  useEffect(() => {
  shuffle(basicQuestions)
  }, [])
 

  return (
   <div className={styles.mainDiv1}>
       <TestIntro/>
       <button onClick={() => console.log(basicQuestions)}>HALO</button>
      {questionsToShuffle.map((data, index)=>  <TestQuestion question={data.question} answear1={data.answear1} answear2={data.answear2} answear3={data.answear3} key={index}/>)}
       </div>
  
   
  );
}

export default View1;