import React from 'react';
import styles from './FlashcardsIntro.module.css';
import { Button, ReactIcon, CSSIcon, HTMLIcon, JSIcon, StartButton } from 'components';

export function FlashcardsIntro(props) {
    const { showIntro } = props;

    const hideIntro = (hide) => {
        showIntro(hide);
    };

    return (
        <div className={styles.FlashcardsIntro}>
            <div className={styles.FlashcardsIntroCard}>
                <p>
                    Select a category and draw flashcards with typical questions you may
                    be asked at the interview.
                </p>
                <section className={styles.flashcardsTechChoice}>
                    <Button>
                        <ReactIcon className={styles.flashcardTechIcon} />
                    </Button>
                    <Button>
                        <HTMLIcon className={styles.flashcardTechIcon} />
                    </Button>
                    <Button>
                        <CSSIcon className={styles.flashcardTechIcon} />
                    </Button>
                    <Button>
                        <JSIcon className={styles.flashcardTechIcon} />
                    </Button>
                </section>
                <Button
                    className={'regularButton startButton'}
                    onClick={() => hideIntro(false)}
                >
                    <StartButton />
                </Button>
            </div>
        </div>
    );
}
