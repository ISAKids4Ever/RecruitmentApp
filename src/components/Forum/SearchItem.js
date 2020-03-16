import React, { useState, useEffect } from 'react'
import styles from './SearchItem.module.css'

export function SearchItem({allQuestions, searchedDisplay}) {

    const [filter, setFilter] = useState("");
    
    useEffect(()=>{
    }, [])

    function handleSearch(event) {
        event.preventDefault();
        let searched = filter.toLowerCase();
    
        let included = allQuestions.filter(question => {
            return question.description.toLowerCase().includes(searched) ||
                   question.title.toLowerCase().includes(searched)
        })
        searchedDisplay(included)

    }

    return(
        <form className={styles.form} onSubmit={handleSearch}>
            <input className={styles.input} placeholder="Enter the  key word" onChange={event => setFilter(event.target.value)}/>
            <button className={styles.btn} type="submit">SEARCH QUESTION</button> 
        </form>
    )
}