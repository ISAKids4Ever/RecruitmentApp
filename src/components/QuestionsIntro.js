import React from 'react'
import styles from './QuestionsIntro.module.css'

function QuestionsIntro(props) {
    const {showIntro} = props

    const hideIntro = (hide) => {
        showIntro(hide)
    }

    return (
        <div className={styles.Question}>
            <p>Poznaj typowe pytania rekrutacujne i odpowiedzi.</p>
            <button onClick={() => hideIntro(false)}>Wylosuj pytanie</button>
        </div>
    )
}

export default QuestionsIntro