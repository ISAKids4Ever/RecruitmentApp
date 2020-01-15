import React, { useState } from 'react'
import styles from './QuestionsIntro.module.css'

function QuestionsIntro(props) {
    const {banan} = props
    const [hidden, setHidden] = useState(banan)


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