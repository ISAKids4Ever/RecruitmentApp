import React from "react";
import styles from "./Item.module.css";


const Item =  (props) => {
    const { question } = props
    return (
        <div className={styles.mainDiv}>
            { question }
        </div>
    );
}

export default Item;
