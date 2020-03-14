import React, { useState, useEffect }  from 'react'
import styles from './Flashcard.module.css'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

import { Button } from '../';
import { CardContent } from './CardContent';

export function Flashcard({questions, all, setAll, known, setKnown, unknown, setUnknown, checkAllWithUserBase}) {
    const [countQuestions, setCountQuestions] = useState(0);
    const [nextQuestion, setNextQuestion] = useState(questions[0]);
    
    useEffect(() => {
        localStorage.setItem('known', JSON.stringify(known));
        localStorage.setItem('unknown', JSON.stringify(unknown));
    });

    console.log(all);
    console.log(known);
    console.log(unknown);

    const addToUserBase = (id, tag) => {
        if (tag === 'known') {
            addingAndRemovingFromBase(id, known,setKnown, unknown, setUnknown)
        }else{
            addingAndRemovingFromBase(id, unknown, setUnknown, known,setKnown)
        }
        checkAllWithUserBase(questions);
    }

    const addingAndRemovingFromBase = (id, baseToAdd, setBaseToAdd, baseToRemove, setBaseToRemove ) => {
        if(!baseToAdd.includes(id)){
            let newBaseToAdd = baseToAdd;
            newBaseToAdd.push(id);
            setBaseToAdd(newBaseToAdd);
            if(baseToRemove.includes(id)){
                let newBaseToRemove = baseToRemove.filter(item => item !== id);
                setBaseToRemove(newBaseToRemove);
            }
        }
    }

    const nextId = () => {
        let nextId
        while(nextId === undefined){
            nextId = drawNextId();
        }
        let nextQuestion = questions.find(question => question.id === nextId);
        setNextQuestion(nextQuestion);
    }

    const drawNextId = () => {
        let probabilityNumber = Math.floor(Math.random() * 100); 
        let nextId;
        if (probabilityNumber < 45) {
            if(unknown.length > 0){
                let drawWhich = unknown.length;
                let drawId = Math.floor(Math.random() * drawWhich); 
                nextId = unknown[drawId];
            }else{
                return
            }
        }else if(probabilityNumber < 85){
            if(all.length > 0){
                let drawWhich = all.length;
                let drawId = Math.floor(Math.random() * drawWhich);
                nextId = all[drawId]
            }else{
                return
            }
        }else{
            if(known.length > 0){
                let drawWhich = known.length;
                let drawId = Math.floor(Math.random() * drawWhich); 
                nextId = known[drawId]
            }else{
                return
            }
        }
        return nextId;
    }

    return (
        <div className={styles.flashcardView}>
            <div className={styles.flashcardPlusButtons}>
                { (countQuestions) ?  <Button onClick={() => nextId()} className={'iconButton'}><i><FaChevronCircleLeft/></i></Button> : <p> </p>}
                <CardContent question={ nextQuestion } addToUserBase={addToUserBase} />
                { (countQuestions+1 < questions.length) ? <Button onClick={() => nextId()} className={'iconButton'}><i><FaChevronCircleRight/></i></Button> : <p> </p>}
            </div>
        </div>
    )
}
