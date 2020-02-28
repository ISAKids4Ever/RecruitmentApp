import React, { useEffect, useState } from "react";
import styles from "./Questions.module.css";
import QuestionsIntro from '../components/QuestionsIntro';
import { Flashcard } from '../components'

const Flashcards = [
  {
    id: '1',
    question: 'Master Yoda... is Darth Vader my father? Mmm... rest I need. Yes... rest. Yoda, I must know.',
    answer: 'Your father he is. Told you, did he? Yes. Unexpected this is, and unfortunate... Unfortunate that I know the truth? No. Unfortunate that you rushed to face him...'
  },
  {
    id: '2',
    question: 'Just stick close to Chewie and Lando. ',
    answer: 'Oh, Im terribly sor... Artoo! What are you doing here? Well, I can see youre serving drinks, but this place is dangerous. Theyre going to execute Master Luke and, if were not careful, us too! '
  },
  {
    id: '3',
    question: 'Fighters coming in. Theres too many of them!',
    answer: 'Accelerate to attack speed! Draw their fire away from the cruisers. Copy, Gold Leader.'
  },
  {
    id: '4',
    question: 'Captain Solo, this time you have gone too far. No, I will not be quiet, Chewbacca.',
    answer: 'Why doesnt anyone listen to me? The fleet is beginning to break up. Go back and stand by the manual release for the landing claw. I really dont see how thats going to help.'
  }
]


function Questions() {
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

export default Questions;