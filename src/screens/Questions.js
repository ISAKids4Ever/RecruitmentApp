import React from "react";
import styles from "./Questions.module.css";
import QuestionsIntro from '../components/QuestionsIntro';
import Fleshcard from '../components/Flashcard'



function Questions() {
  return (
   <div className={styles.mainDiv2}>
      <QuestionsIntro />
      <Fleshcard />
   </div>
  );
}

export default Questions;