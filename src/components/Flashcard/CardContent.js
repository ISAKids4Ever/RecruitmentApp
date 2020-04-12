import React, { useState, useEffect } from 'react';
import styles from './Flashcard.module.css';

import {
    Button,
    CrossIcon,
    CheckIcon,
    SaveIcon,
    AnswerIcon,
    QuestionIcon,
} from 'components';

export function CardContent({ question, addToUserBase, known, unknown }) {
    const [isKnownAdded, setIsKnownAdded] = useState('#416071');
    const [isUnknownAdded, setIsUnknownAdded] = useState('#416071');

    useEffect(() => {
        isClicked(known, setIsKnownAdded);
        isClicked(unknown, setIsUnknownAdded);
    });

    const isClicked = (base, setClass) => {
        if (base.includes(question.id)) {
            setClass('#9e005d');
        } else {
            setClass('#416071');
        }
    };

    return (
        <div className="flashcardPlusUserButtons">
            <div className={styles.flashcard}>
                <div className={styles.flashcardInner}>
                    <div className={styles.flashcardFront}>
                        <QuestionIcon className={styles.flashcardIcon} />
                        <p>{question.question}</p>
                    </div>
                    <div className={styles.flashcardBack}>
                        <i>
                            <AnswerIcon className={styles.flashcardIcon} />
                        </i>
                        <p>{question.answer}</p>
                    </div>
                </div>
            </div>
            <div className={styles.flashcardUserButtons}>
                <Button className={'iconButton'}>
                    {' '}
                    <SaveIcon className={styles.flashcardUserIcons} />{' '}
                </Button>
                <Button
                    className={'iconButton'}
                    onClick={() => addToUserBase(question.id, 'known')}
                >
                    <i>
                        {' '}
                        <CheckIcon
                            className={styles.flashcardUserIcons}
                            isKnownAdded={isKnownAdded}
                        />{' '}
                    </i>
                </Button>
                <Button
                    className={'iconButton'}
                    onClick={() => addToUserBase(question.id, 'unknown')}
                >
                    <i>
                        <CrossIcon
                            className={styles.flashcardUserIcons}
                            isUnknownAdded={isUnknownAdded}
                        />
                    </i>
                </Button>
            </div>
        </div>
    );
}
