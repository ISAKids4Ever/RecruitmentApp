import React, { useEffect, useState } from "react";
import styles from "./Tests.module.css";
import TestQuestion from "../components/TestQuestion";
import TestIntro from "../components/TestIntro";
import { Pagination } from "../components/Pagination";
import BackButton from "../components/BackButton";
import TestResults from "../components/TestResults";
import SubmitTestButton from "../components/SubmitTestButton";

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

function Tests() {
  const [postsPerPage]= useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementToShow, setElementToShow] = useState('TestIntro')
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirtsPage = indexOfLastPage-postsPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  
  const [questionsDisplay, setQuestionsDisplay] = useState(basicQuestions);
  const currentQuestions = questionsDisplay.slice(indexOfFirtsPage, indexOfLastPage)

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
  }
  return (
    <div className={styles.mainDiv1}>
      <TestIntro elementToShow={elementToShow} setElementToShow={setElementToShow}/>
      <BackButton elementToShow={elementToShow} setElementToShow={setElementToShow}/>
      {currentQuestions.map((data, index) => (
        <TestQuestion
          question={data.question}
          answear1={data.answear1}
          answear2={data.answear2}
          answear3={data.answear3}
          key={index}
          elementToShow={elementToShow}
        />
      ))}
      <SubmitTestButton elementToShow={elementToShow} setElementToShow={setElementToShow} currentPage={currentPage} lastQuestion={questionsDisplay.length}></SubmitTestButton>
      <TestResults elementToShow={elementToShow} setElementToShow={setElementToShow}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={questionsDisplay.length} paginate={paginate} currentPage={currentPage} elementToShow={elementToShow}/>
      
      
    </div>
  );
}

export default Tests;
