import React, { useEffect, useState } from "react";
import styles from "./Questions.module.css";
import {QuestionsIntro, Flashcard} from 'components';
import { Flashcards } from './QuestionsBase.js'

export function Questions() {
  const [shuffledFlashcards, setShuffledFlashcards] = useState(Flashcards);
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    shuffle(Flashcards);
  }, []);

  const whatsDisplayed = (dataFromIntro) => {
    setShowIntro(dataFromIntro);
  }

  const shuffle = (array) => {
    const shuffledFlashcards = [...array]
    for (let i = shuffledFlashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledFlashcards[i], shuffledFlashcards[j]] = [shuffledFlashcards[j], shuffledFlashcards[i]];
    }
    setShuffledFlashcards(shuffledFlashcards)
  }

  if (showIntro) {
    return (
      <div className={styles.mainDiv2}>
        <QuestionsIntro showIntro={whatsDisplayed}/>
      </div>
    )
  }else{
    return (
      <div className={styles.mainDiv2}>
        <Flashcard flashcards={shuffledFlashcards} />
      </div>
    )
  }
}