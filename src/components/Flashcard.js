import React, { useState }  from 'react'
import styles from './Flashcard.module.css'
import Button from './Button'

function Flashcard(props) {
    const { flashcards } = props

    const [count, setCount] = useState(0);
        return (
            <div className={styles.flashcardView}>
                {/* <p>{flashcards[count].id}</p> */}
                <div className={styles.flashcardPlusButtons}>
                    { (count) ?  <Button onClick={() => setCount(count - 1)} className={'iconButton'}><i className="fas fa-chevron-circle-left"></i></Button> : <p> </p>}
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
                    { (count+1 < flashcards.length) ? <Button onClick={() => setCount(count + 1)} className={'iconButton'}><i className="fas fa-chevron-circle-right"></i></Button> : <p> </p>}
                </div>
                <div className={styles.flashcardUserButtons}>
                    <Button className={'iconButton'}><i className="fas fa-save"></i></Button>
                    <Button className={'iconButton'}><i className="fas fa-check"></i></Button>
                    <Button className={'iconButton'}><i className="fas fa-times"></i></Button>
                </div>
            </div>
        )
}

export default Flashcard