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

    const drawNextQuestion = () => {
        let nextId;
        while(nextId === undefined){
            let randomCategory = Math.floor(Math.random() * 100); 
            if (randomCategory < 45) {
                nextId = randomIdFromCategory(unknown);
            }else if(randomCategory < 85){
                nextId = randomIdFromCategory(all);
            }else{
                nextId = randomIdFromCategory(known);
            }
        }
        console.log(nextId);
        let nextQuestion = questions.find(question => question.id === nextId);
        setNextQuestion(nextQuestion);
    }

    const randomIdFromCategory = (category) => {
        if(category.length > 0){
            let nextId;
            let numberToDraw = category.length;
            let drawId = Math.floor(Math.random() * numberToDraw);
            return nextId = category[drawId];
        }
    }

    return (
        <div className={styles.flashcardView}>
            <div className={styles.flashcardPlusButtons}>
                <Button onClick={() => drawNextQuestion()} className={ 'iconButton' }><i><FaChevronCircleLeft/></i></Button>
                <CardContent question={ nextQuestion } addToUserBase={ addToUserBase } />
                <Button onClick={() => drawNextQuestion()} className={'iconButton'}><i><FaChevronCircleRight/></i></Button>
            </div>
        </div>
    )
}
