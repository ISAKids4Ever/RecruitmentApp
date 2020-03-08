import React, { useEffect, useState } from "react";
import styles from "./Flashcards.module.css";
import { FlashcardsIntro, Flashcard} from 'components';
import { Questions } from './QuestionsBase.js'

export function Flashcards() {
  const [shuffledFlashcards, setShuffledFlashcards] = useState(Questions);
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    shuffle(Questions);
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
      <div className={styles.mainFlashcards}>
        <FlashcardsIntro showIntro={whatsDisplayed}/>
      </div>
    )
  }else{
    return (
      <div className={styles.mainFlashcards}>
        <Flashcard flashcards={shuffledFlashcards} />
      </div>
    )
  }
}