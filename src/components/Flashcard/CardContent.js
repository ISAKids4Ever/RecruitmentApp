import React from 'react'
import styles from './Flashcard.module.css'
import { FaQuestion, FaCommentDots, FaSave, FaCheck, FaTimes } from 'react-icons/fa'

import { Button } from '../';


export function CardContent({ question, addToUserKnown }) {

    return (
        <div className="flashcardPlusUserButtons">
            <div className={styles.flashcard}>
                <div className={styles.flashcardInner}>
                    <div className={styles.flashcardFront}>
                        <i><FaQuestion /></i>
                        <p>{question.question}</p>
                    </div>
                    <div className={styles.flashcardBack}>
                        <i><FaCommentDots /></i>
                        <p>{question.answer}</p>
                    </div>
                </div>
            </div>
            <div className={styles.flashcardUserButtons}>
                <Button className={'iconButton'}><i><FaSave /></i></Button>
                <Button className={'iconButton'} onClick={() => addToUserKnown(question.id, 'known')} ><i><FaCheck /></i></Button>
                <Button className={'iconButton'} onClick={() => addToUserKnown(question.id, 'unknown')} ><i><FaTimes /></i></Button>
            </div>
        </div>
    )
}