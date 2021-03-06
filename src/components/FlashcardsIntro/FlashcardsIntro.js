import React, { useState } from 'react';
import styles from './FlashcardsIntro.module.css';
import { Button } from 'components';
import { ReactIcon, CSSIcon, HTMLIcon, JSIcon, StartButton } from '../svgComponents';

export function FlashcardsIntro(props) {
    const { showIntro } = props;
    const hoverColor = '#416071';
    const nonHoverColor = '#9e005d';
    const [onHoverColor, setOnHoverColor] = useState(nonHoverColor);

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
                    onMouseEnter={() => setOnHoverColor(hoverColor)}
                    onMouseLeave={() => setOnHoverColor(nonHoverColor)}
                >
                    <StartButton hoverColor={onHoverColor} />
                </Button>
            </div>
        </div>
    );
}
