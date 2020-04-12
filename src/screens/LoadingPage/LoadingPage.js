import React from 'react';
import styles from './LoadingPage.module.css';
import LOGO from '../../components/Icons/LOGO.svg';

export function LoadingPage() {
    return (
        <div className={styles.mainLoading}>
            <img src={LOGO} alt="intervyou logo" />
        </div>
    );
}
