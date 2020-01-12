import React from "react";
import styles from "./Item.module.css";


const Item =  (props) => {
    const { question, date, lastRespDate, likes, respAmount } = props
    return (
        <div className={styles.mainDiv}>
            <div className={styles.firstDiv}>{question}</div>
            <div className={styles.secondDiv}>
                <div className={styles.datesDiv}>
                    <div>{date}</div>
                    <div>{lastRespDate}</div>
                </div>
                <div className={styles.likesDiv}>
                    <div>{likes}</div>
                    <div>{respAmount}</div>
                </div>
            </div>
        </div>
    );
}

export default Item;
