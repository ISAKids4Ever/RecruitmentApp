import React from 'react'
import styles from './SearchItem.module.css'

export function SearchItem() {
    return(
        <form className={styles.form}>
            <input className={styles.input} placeholder="Enter the  key word"/>
            <button className={styles.btn}>SEARCH QUESTION</button> 
        </form>
    )
}