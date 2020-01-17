import React, { useState } from 'react'
import styles from './QuestionsIntro.module.css'

function QuestionsIntro(props) {
    const [hidden, setHidden] = useState('visible')


    if (hidden === 'none'){
        return null
    } else {
        return (
            <div className={styles.Question}>
                <p>Poznaj typowe pytania rekrutacujne i odpowiedzi.</p>
                <button onClick={() => setHidden('none')}>Wylosuj pytanie</button>
            </div>
        )
    }
}

export default QuestionsIntro