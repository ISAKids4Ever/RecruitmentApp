import React from "react";
import styles from "./Item.module.css";


const Item =  (props) => {
    const { question, date } = props
    return (
        <div className={styles.mainDiv}>
            { question }
            { date }
        </div>
    );
}

export default Item;
