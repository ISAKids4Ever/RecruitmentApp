import React, { useEffect, useState } from "react";
import styles from "./Questions.module.css";
import QuestionsIntro from '../components/QuestionsIntro';
import Fleshcard from '../components/Flashcard'

const Flashcards = [
  {
    id: '1',
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, enim!',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis earum repudiandae recusandae voluptates rem velit itaque ducimus, facere quasi.'
  },
  {
    id: '2',
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, enim!',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis earum repudiandae recusandae voluptates rem velit itaque ducimus, facere quasi.'
  },
  {
    id: '3',
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, enim!',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis earum repudiandae recusandae voluptates rem velit itaque ducimus, facere quasi.'
  },
  {
    id: '4',
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, enim!',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis earum repudiandae recusandae voluptates rem velit itaque ducimus, facere quasi.'
  }
]


function Questions() {
  const [shuffledFlashcards, setShuffledFlashcards] = useState(Flashcards);

  useEffect(() => {
    shuffle(Flashcards);
  }, []);

  function shuffle(array) {
    const shuffledFlashcards = [...array]
    for (let i = shuffledFlashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledFlashcards[i], shuffledFlashcards[j]] = [shuffledFlashcards[j], shuffledFlashcards[i]];
    }
    setShuffledFlashcards(shuffledFlashcards)
    console.log(shuffledFlashcards)
  }

  return (
   <div className={styles.mainDiv2}>
      <QuestionsIntro />
      <Fleshcard flashcards={shuffledFlashcards} hidden={'none'}/>
   </div>
  );
}

export default Questions;