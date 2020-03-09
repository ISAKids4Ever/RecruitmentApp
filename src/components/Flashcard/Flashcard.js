import React, { useState, useEffect }  from 'react'
import styles from './Flashcard.module.css'
import { FaQuestion, FaCommentDots, FaChevronCircleLeft, FaChevronCircleRight, FaSave, FaCheck, FaTimes } from 'react-icons/fa'

import { Button } from '../';

export function Flashcard(props) {
    const { questions } = props;

    const [count, setCount] = useState(0);
    const [known, setKnown] = useState(JSON.parse(localStorage.getItem('known')) || []);
    const [unknown, setUnknown] = useState(JSON.parse(localStorage.getItem('unknown')) || []);

    useEffect(() => {
        localStorage.setItem('known', JSON.stringify(known));
        console.table(JSON.parse(localStorage.getItem('known')));
    });

    useEffect(() => {
        localStorage.setItem('unknown', JSON.stringify(unknown));
        console.table(JSON.parse(localStorage.getItem('unknown')));
    })

    const addToUserKnown = () => {
        let newKnown = known;
        if(!newKnown.includes(questions[count].id)){
            newKnown.push(questions[count].id);
            setKnown(newKnown);
        }
    }

    const addToUserUnknown = () => {
        let newUnknown = unknown;
        if(!newUnknown.includes(questions[count].id)){
            newUnknown.push(questions[count].id);
            setUnknown(newUnknown);
        }
    }

        return (
            <div className={styles.flashcardView}>
                <div className={styles.flashcardPlusButtons}>
                    { (count) ?  <Button onClick={() => setCount(count - 1)} className={'iconButton'}><i><FaChevronCircleLeft/></i></Button> : <p> </p>}
                    <div className={styles.flashcard}>
                        <div className={styles.flashcardInner}>
                            <div className={styles.flashcardFront}>
                                <i><FaQuestion /></i>
                                <p>{questions[count].question}</p>
                            </div>
                            <div className={styles.flashcardBack}>
                                <i><FaCommentDots /></i>
                                <p>{questions[count].answer}</p>
                            </div>
                        </div>
                    </div>
                    { (count+1 < questions.length) ? <Button onClick={() => setCount(count + 1)} className={'iconButton'}><i><FaChevronCircleRight/></i></Button> : <p> </p>}
                </div>
                <div className={styles.flashcardUserButtons}>
                    <Button className={'iconButton'}><i><FaSave /></i></Button>
                    <Button className={'iconButton'} onClick={() => addToUserKnown()} ><i><FaCheck /></i></Button>
                    <Button className={'iconButton'} onClick={() => addToUserUnknown()} ><i><FaTimes /></i></Button>
                </div>
            </div>
        )
}