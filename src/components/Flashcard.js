import React, { useState }  from 'react'
import styles from './Flashcard.module.css'

function Flashcard(props) {
    const {flashcards, hidden} = props
    console.log(flashcards)
    let i=0;
    
        return (
            <div className={styles.Flashcard}>
                <p>Flashcard</p>

                <p>{flashcards[i].question}</p>
                <p>{flashcards[i].answer}</p>
                <p>{flashcards[i].id}</p>
                
                {i ?  <button onClick={i=i-1}>Poprzednie</button> : null}
                <button onClick={i = i+1}>Nastepne</button>
            </div>
        )
    
}

export default Flashcard