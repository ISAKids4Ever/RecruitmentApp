import React, { useState, useEffect } from 'react';
import styles from './Flashcard.module.css';

import { Button } from 'components';

import { CrossIcon, CheckIcon, SaveIcon, AnswerIcon, QuestionIcon } from '../icons';

export function CardContent({ question, addToUserBase, known, unknown }) {
    const notActiveUserIconColor = '#416071';
    const activeUserIconColor = '#9e005d';
    const [isKnownAdded, setIsKnownAdded] = useState(notActiveUserIconColor);
    const [isUnknownAdded, setIsUnknownAdded] = useState(notActiveUserIconColor);

    useEffect(() => {
        isClicked(known, setIsKnownAdded);
        isClicked(unknown, setIsUnknownAdded);
    });

    const isClicked = (base, setColor) => {
        if (base.includes(question.id)) {
            setColor(activeUserIconColor);
        } else {
            setColor(notActiveUserIconColor);
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
                            knownColor={isKnownAdded}
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
                            knownColor={isUnknownAdded}
                        />
                    </i>
                </Button>
            </div>
        </div>
    );
}
