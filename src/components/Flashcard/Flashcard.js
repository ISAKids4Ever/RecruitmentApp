import React, { useState, useEffect }  from 'react'
import styles from './Flashcard.module.css'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

import { Button } from '../';
import { CardContent } from './CardContent';

export function Flashcard({questions, all, setAll, known, setKnown, unknown, setUnknown, checkAllWithUserBase}) {

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if(known){
            localStorage.setItem('known', JSON.stringify(known));
        }
        if(unknown){
            localStorage.setItem('unknown', JSON.stringify(unknown));
        }
    });

    console.log(all);
    console.log(known);
    console.log(unknown);

    const addToUserKnown = (id, tag) => {
        if (tag === 'known') {
            if(!known.includes(id)){
                let newKnown = known;
                newKnown.push(id);
                setKnown(newKnown);
    
                if(unknown.includes(id)){
                    let newUnknown = unknown.filter(item => item !== id);
                    setUnknown(newUnknown);
                }
            }
        }else{
            if(!unknown.includes(id)){
                let newUnknown = unknown;
                newUnknown.push(id);
                setUnknown(newUnknown);
                
                if(known.includes(id)){
                    let newKnown = known.filter(item => item !== id);
                    setKnown(newKnown);
                }
            }
        }
        checkAllWithUserBase(questions);
    }

    return (
        <div className={styles.flashcardView}>
            <div className={styles.flashcardPlusButtons}>
                { (count) ?  <Button onClick={() => setCount(count - 1)} className={'iconButton'}><i><FaChevronCircleLeft/></i></Button> : <p> </p>}
                <CardContent question={ questions[count] } addToUserKnown={addToUserKnown} />
                { (count+1 < questions.length) ? <Button onClick={() => setCount(count + 1)} className={'iconButton'}><i><FaChevronCircleRight/></i></Button> : <p> </p>}
            </div>
        </div>
    )
}
