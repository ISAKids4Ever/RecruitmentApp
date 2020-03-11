import React from 'react'
import styles from './Flashcard.module.css'
import { FaQuestion, FaCommentDots, FaSave, FaCheck, FaTimes } from 'react-icons/fa'

import { Button } from '../';


export function CardContent(props) {
    const { question, addToUserKnown, addToUserUnknown } = props;

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
                <Button className={'iconButton'} onClick={() => addToUserKnown()} ><i><FaCheck /></i></Button>
                <Button className={'iconButton'} onClick={() => addToUserUnknown()} ><i><FaTimes /></i></Button>
            </div>
        </div>
    )
}