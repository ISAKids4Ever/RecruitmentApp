import React, { useState }  from 'react'
import styles from './Flashcard.module.css'

function Flashcard(props) {
    const { flashcards } = props

    const [count, setCount] = useState(0);
        return (
            <div className={styles.Flashcard}>

                <p>{flashcards[count].question}</p>
                <p>{flashcards[count].answer}</p>
                <p>{flashcards[count].id}</p>
                
                { (count) ?  <button onClick={() => setCount(count - 1)}>Poprzednie</button> : null}
                { (count+1 < flashcards.length) ? <button onClick={() => setCount(count + 1)}>Nastepne</button> : null }
            </div>
        )
    
}

export default Flashcard