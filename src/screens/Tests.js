import React, { useEffect, useState } from "react";
import styles from "./Tests.module.css";
import TestQuestion from "../components/TestQuestion";
import TestIntro from "../components/TestIntro";

const basicQuestions = [
{
  question: "pytanko 1",
  answear1: {
    value: "odp 1",
    correct: false},
  answear2: {
    value: "odp 2",
    correct: true},
  answear3: {
    value: "odp 3",
    correct: false}
},
{
  question: "pytanko 2",
  answear1: {
    value: "odp 1.2",
    correct: false},
  answear2: {
    value: "odp 2.2",
    correct: false},
  answear3: {
    value: "odp 3.2",
    correct: true}
},
{
  question: "pytanko 3",
  answear1: {
    value: "odp 1.3",
    correct: true},
  answear2: {
    value: "odp 2.3",
    correct: false},
  answear3: {
    value: "odp 3.3",
    correct: false}
}
];



function View1() {
  const [questionsDisplay, setQuestionsDisplay] = useState(basicQuestions);

  useEffect(() => {
    shuffle(basicQuestions);
  }, []);

  function shuffle(a) {
    const newQuestions = [...a];
    for (let i = newQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newQuestions[i], newQuestions[j]] = [newQuestions[j], newQuestions[i]];
    }
    setQuestionsDisplay(newQuestions);
    console.log(newQuestions);
  }

  return (
    <div className={styles.mainDiv1}>
      <TestIntro/>
      {questionsDisplay.map((data, index) => (
        <TestQuestion
          question={data.question}
          answear1={data.answear1}
          answear2={data.answear2}
          answear3={data.answear3}
          key={index}
        />
      ))}
    </div>
  );
}

export default View1;
