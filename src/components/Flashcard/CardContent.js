import React, { useState, useEffect } from 'react';
import styles from './Flashcard.module.css';
import { FaQuestion, FaCommentDots, FaSave, FaCheck, FaTimes } from 'react-icons/fa';

import { Button } from 'components';
import QuestionIcon from '../Icons/QuestionIcon';
import AnswerIcon from '../Icons/AnswerIcon';

export function CardContent({ question, addToUserBase, known, unknown}) {
    const [isKnownAdded, setIsKnownAdded] = useState('iconButton');
    const [isUnknownAdded, setIsUnknownAdded] = useState('iconButton');

    useEffect(() => {
        isClicked(known, setIsKnownAdded);
        isClicked(unknown, setIsUnknownAdded);
    });

    const isClicked = (base, setClass) => {
        if(base.includes(question.id)){
            setClass('iconButton iconButtonActive')
        }else{
            setClass('iconButton')
        }
    }

    return (
        <div className="flashcardPlusUserButtons">
            <div className={styles.flashcard}>
                <div className={styles.flashcardInner}>
                    <div className={styles.flashcardFront}>
                        <QuestionIcon className={styles.flashcardIcon}/>
                        <p>{question.question}</p>
                    </div>
                    <div className={styles.flashcardBack}>
                        <i><AnswerIcon className={styles.flashcardIcon}/></i>
                        <p>{question.answer}</p>
                    </div>
                </div>
            </div>
            <div className={styles.flashcardUserButtons}>
                <Button className={'iconButton'}><i><FaSave /></i></Button>
                <Button className={isKnownAdded} onClick={() => addToUserBase(question.id, 'known')} ><i><FaCheck /></i></Button>
                <Button className={isUnknownAdded} onClick={() => addToUserBase(question.id, 'unknown')} ><i><FaTimes /></i></Button>
            </div>
        </div>
    )
}
