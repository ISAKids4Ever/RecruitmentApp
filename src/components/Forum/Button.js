import React from 'react';
import styles from './Button.module.css'

const Button = (props) => {
    const { name, icon, buttonClickFunction } = props;
    return(
        <div className={styles.mainDiv}>
            <button className={styles.button} onClick={buttonClickFunction}>
                <i classNAme={styles.buttonIcon}>{icon}</i>
                { name }
            </button>
        </div>
    )
}

export default Button;