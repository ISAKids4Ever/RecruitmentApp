import React from 'react'
import styles from './QuestionsIntro.module.css'
import Button from './Button'

function QuestionsIntro(props) {
    const {showIntro} = props

    const hideIntro = (hide) => {
        showIntro(hide)
    }

    return (
        <div className={styles.Question}>
            <div className={styles.questionCard}>
                <p>Poznaj typowe pytania rekrutacujne i odpowiedzi.</p>
            </div>
            <Button onClick={() => hideIntro(false)}>Wylosuj pytanie</Button>
        </div>
    )
}

export default QuestionsIntro