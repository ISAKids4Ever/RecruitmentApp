import React, { useState }  from 'react'
import styles from './Flashcard.module.css'
import { FaQuestion, FaCommentDots, FaChevronCircleLeft, FaChevronCircleRight, FaSave, FaCheck, FaTimes } from 'react-icons/fa'

import { Button } from '../';

export function Flashcard(props) {
    const { flashcards } = props

    const [count, setCount] = useState(0);
        return (
            <div className={styles.flashcardView}>
                {/* <p>{flashcards[count].id}</p> */}
                <div className={styles.flashcardPlusButtons}>
                    { (count) ?  <Button onClick={() => setCount(count - 1)} className={'iconButton'}><i><FaChevronCircleLeft/></i></Button> : <p> </p>}
                    <div className={styles.flashcard}>
                        <div className={styles.flashcardInner}>
                            <div className={styles.flashcardFront}>
                                <i><FaQuestion /></i>
                                <p>{flashcards[count].question}</p>
                            </div>
                            <div className={styles.flashcardBack}>
                                <i><FaCommentDots /></i>
                                <p>{flashcards[count].answer}</p>
                            </div>
                        </div>
                    </div>
                    { (count+1 < flashcards.length) ? <Button onClick={() => setCount(count + 1)} className={'iconButton'}><i><FaChevronCircleRight/></i></Button> : <p> </p>}
                </div>
                <div className={styles.flashcardUserButtons}>
                    <Button className={'iconButton'}><i><FaSave /></i></Button>
                    <Button className={'iconButton'}><i><FaCheck /></i></Button>
                    <Button className={'iconButton'}><i><FaTimes /></i></Button>
                </div>
            </div>
        )
}