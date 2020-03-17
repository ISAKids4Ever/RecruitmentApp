import React from 'react'
import styles from './FlashcardsIntro.module.css'
import { Button } from 'components';


export function FlashcardsIntro(props) {
    const {showIntro} = props

    const hideIntro = (hide) => {
        showIntro(hide)
    }

    return (
        <div className={styles.FlashcardsIntro}>
            <div className={styles.FlashcardsIntroCard}>
                <p>Poznaj typowe pytania rekrutacujne i odpowiedzi.</p>
            </div>
            <Button onClick={() => hideIntro(false)}>Wylosuj pytanie</Button>
        </div>
    )
}