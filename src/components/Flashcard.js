import React, { useState }  from 'react'
import styles from './Flashcard.module.css'

function Flashcard(props) {
    const { flashcards } = props

    const [count, setCount] = useState(0);
        return (
            <div className={styles.flashcardView}>
                {/* <p>{flashcards[count].id}</p> */}
                <div className={styles.flashcardPlusButtons}>
                    <div className={styles.flashcardButton}>
                        { (count) ?  <button onClick={() => setCount(count - 1)}><i className="fas fa-angle-left"></i></button> : <p> </p>}
                    </div>
                    <div className={styles.flashcard}>
                        <div className={styles.flashcardInner}>
                            <div className={styles.flashcardFront}>
                                <i className="fas fa-question" />
                                <p>{flashcards[count].question}</p>
                            </div>
                            <div className={styles.flashcardBack}>
                                <i className="far fa-comment-dots" />
                                <p>{flashcards[count].answer}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.flashcardButton}>
                        { (count+1 < flashcards.length) ? <button onClick={() => setCount(count + 1)}><i className="fas fa-angle-right"></i></button> : <p> </p> }
                    </div>
                </div>
                <div className={styles.flashcardUserButtons}>
                    <button><i className="fas fa-save"></i></button>
                    <button><i className="fas fa-check"></i></button>
                    <button><i className="fas fa-times"></i></button>
                </div>
            </div>
        )
}

export default Flashcard