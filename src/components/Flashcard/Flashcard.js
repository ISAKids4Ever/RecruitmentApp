import React, { useState } from 'react';
import styles from './Flashcard.module.css';
import { FaUndo } from 'react-icons/fa';

import { Button } from 'components';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';
import { CardContent } from './CardContent';

export function Flashcard({
    questions,
    all,
    known,
    setKnown,
    unknown,
    setUnknown,
    checkAllWithUserBase,
    setShowIntro,
}) {
    const [countQuestions, setCountQuestions] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [previousQuestions, setPreviousQuestions] = useState([questions[0].id]);

    const addToUserBase = (id, tag) => {
        if (tag === 'known') {
            addingAndRemovingFromBase(id, known, setKnown, unknown, setUnknown);
        } else {
            addingAndRemovingFromBase(id, unknown, setUnknown, known, setKnown);
        }
        checkAllWithUserBase(questions);
    };

    const addingAndRemovingFromBase = (
        id,
        baseToAdd,
        setBaseToAdd,
        baseToRemove,
        setBaseToRemove
    ) => {
        if (!baseToAdd.includes(id)) {
            let newBaseToAdd = baseToAdd;
            newBaseToAdd.push(id);
            setBaseToAdd(newBaseToAdd);
            if (baseToRemove.includes(id)) {
                let newBaseToRemove = baseToRemove.filter((item) => item !== id);
                setBaseToRemove(newBaseToRemove);
            }
        }
    };

    const nextQuestion = () => {
        if (countQuestions === previousQuestions.length) {
            drawNextQuestion();
        } else {
            let forward = +1;
            movingInsidePreviousQuestions(forward);
        }
    };

    const backToPrevious = () => {
        let backward = -1;
        movingInsidePreviousQuestions(backward);
    };

    const movingInsidePreviousQuestions = (direction) => {
        let newCount = countQuestions + direction;
        let newCurrentQuestion = questions.find(
            (question) => question.id === previousQuestions[newCount - 1]
        );
        setCurrentQuestion(newCurrentQuestion);
        setCountQuestions(newCount);
    };

    const drawNextQuestion = () => {
        let nextId;
        while (nextId === undefined || previousQuestions.includes(nextId)) {
            let randomCategory = Math.floor(Math.random() * 100);
            if (randomCategory < 45) {
                nextId = randomIdFromCategory(unknown);
            } else if (randomCategory < 85) {
                nextId = randomIdFromCategory(all);
            } else {
                nextId = randomIdFromCategory(known);
            }
        }
        let nextQuestion = questions.find(question => question.id === nextId);
        setCurrentQuestion(nextQuestion);

        let newPrevious = previousQuestions;
        newPrevious.push(nextId);
        setPreviousQuestions(newPrevious);

        setCountQuestions(countQuestions + 1);
    };

    const randomIdFromCategory = (category) => {
        if (category.length > 0) {
            let numberToDraw = category.length;
            let drawId = Math.floor(Math.random() * numberToDraw);
            return category[drawId];
        }
    };

    return (
        <div className={styles.flashcardView}>
            <div className={styles.flashcardPlusButtons}>
                {countQuestions > 1 ? (
                    <Button onClick={() => backToPrevious()} className={'iconButton'}>
                        <ArrowLeftIcon className={styles.flashcardIcon} />
                    </Button>
                ) : (
                    <p> </p>
                )}
                <CardContent
                    question={currentQuestion}
                    addToUserBase={addToUserBase}
                    known={known}
                    unknown={unknown}
                />
                {countQuestions < 12 ? (
                    <Button onClick={() => nextQuestion()} className={'iconButton'}>
                        <ArrowRightIcon className={styles.flashcardIcon} />
                    </Button>
                ) : (
                    <Button onClick={() => setShowIntro(true)} className={'iconButton'}>
                        <i>
                            <FaUndo />
                        </i>
                    </Button>
                )}
            </div>
        </div>
    );
}
