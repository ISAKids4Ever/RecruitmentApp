import React, { useState, useEffect }  from 'react'
import styles from './Flashcard.module.css'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

import { Button } from '../';
import { CardContent } from './CardContent';

export function Flashcard({questions, all, setAll, known, setKnown, unknown, setUnknown, checkAllWithUserBase}) {
    const [count, setCount] = useState(0);
    
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

    return (
        <div className={styles.flashcardView}>
            <div className={styles.flashcardPlusButtons}>
                { (count) ?  <Button onClick={() => setCount(count - 1)} className={'iconButton'}><i><FaChevronCircleLeft/></i></Button> : <p> </p>}
                <CardContent question={ questions[count] } addToUserBase={addToUserBase} />
                { (count+1 < questions.length) ? <Button onClick={() => setCount(count + 1)} className={'iconButton'}><i><FaChevronCircleRight/></i></Button> : <p> </p>}
            </div>
        </div>
    )
}
