import React from 'react';
import styles from './FlashcardsIntro.module.css';
import { Button } from 'components';
import ReactIcon from '../Icons/ReactIcon';
import HTMLIcon from '../Icons/HTMLIcon';
import CSSIcon from '../Icons/CSSIcon';
import JSIcon from '../Icons/JSIcon';

import StartButton from '../Icons/StartButton';

export function FlashcardsIntro(props) {
    const { showIntro } = props;

    const hideIntro = (hide) => {
        showIntro(hide);
    };

    return (
        <div className={styles.FlashcardsIntro}>
            <div className={styles.FlashcardsIntroCard}>
                <p>Poznaj typowe pytania rekrutacujne i odpowiedzi.</p>
                <section className={styles.flashcardsTechIcons}>
                    <ReactIcon className={styles.flashcardTechIcon} />
                    <HTMLIcon className={styles.flashcardTechIcon} />
                    <CSSIcon className={styles.flashcardTechIcon} />
                    <JSIcon className={styles.flashcardTechIcon} />
                </section>
                <Button className={'startButton'} onClick={() => hideIntro(false)}>
                    <StartButton />
                </Button>
            </div>
        </div>
    );
}
