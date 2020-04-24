import React, { useEffect, useState } from 'react';
import styles from './Flashcards.module.css';

import { db } from '../../firebase';
import { FlashcardsIntro, Flashcard } from 'components';

export function Flashcards() {
    const [questions, setQuestions] = useState([]);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [showIntro, setShowIntro] = useState(true);
    const [known, setKnown] = useState(JSON.parse(localStorage.getItem('known')) || []);
    const [unknown, setUnknown] = useState(
        JSON.parse(localStorage.getItem('unknown')) || []
    );
    const [all, setAll] = useState();

    useEffect(() => {
        db.collection('flashcards').onSnapshot(handleSnapshot);
    }, []);

    function handleSnapshot(snapshot) {
        const questions = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });

        setQuestions(questions);
        shuffle(questions);
    }

    useEffect(() => {
        checkAllWithUserBase(shuffledQuestions);
    }, [shuffledQuestions]);

    useEffect(() => {
        localStorage.setItem('known', JSON.stringify(known));
        localStorage.setItem('unknown', JSON.stringify(unknown));
    });

    const whatsDisplayed = (dataFromIntro) => {
        setShowIntro(dataFromIntro);
    };

    const checkAllWithUserBase = (questions) => {
        let check = questions.map((question) => question.id);
        for (let i = 0; i < known.length; i++) {
            check = check.filter((id) => id !== known[i]);
        }
        for (let i = 0; i < unknown.length; i++) {
            check = check.filter((id) => id !== unknown[i]);
        }
        setAll(check);
    };

    const shuffle = (questions) => {
        let shuffledQuestions = [...questions];
        for (let i = shuffledQuestions.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledQuestions[i], shuffledQuestions[j]] = [
                shuffledQuestions[j],
                shuffledQuestions[i],
            ];
        }
        setShuffledQuestions(shuffledQuestions);
    };

    if (showIntro) {
        return (
            <div className={styles.mainFlashcards}>
                <FlashcardsIntro showIntro={whatsDisplayed} />
            </div>
        );
    } else {
        return (
            <div className={styles.mainFlashcards}>
                <Flashcard
                    questions={shuffledQuestions}
                    all={all}
                    setAll={setAll}
                    known={known}
                    setKnown={setKnown}
                    unknown={unknown}
                    setUnknown={setUnknown}
                    checkAllWithUserBase={checkAllWithUserBase}
                    setShowIntro={setShowIntro}
                />
            </div>
        );
    }
}
