import React from 'react';
import styles from './Button.module.css'

const Button = (props) => {
    const { name, icon } = props;
    return(
        <div className={styles.mainDiv}>
            <button>
                <i>{icon}</i>
                { name }
            </button>
        </div>
    )
}

export default Button;