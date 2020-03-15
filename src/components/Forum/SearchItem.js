import React, { useState, useEffect } from 'react'
import styles from './SearchItem.module.css'

export function SearchItem({allQuestions, searchedDisplay}) {

    const [filter, setFilter] = useState("");
    
    useEffect(()=>{
        console.log("Q", allQuestions)
    }, [])

    function handleSearch(event) {
        event.preventDefault();
        console.log("AFTER SUB", allQuestions)
        let searched = filter.toLowerCase();
    
        let included = allQuestions.filter(question => {
            return question.description.toLowerCase().includes(searched) ||
                   question.title.toLowerCase().includes(searched)
        })
        searchedDisplay(included)

        console.log("INCLUDED: ", included)
    }

    return(
        <form className={styles.form} onSubmit={handleSearch}>
            <input className={styles.input} placeholder="Enter the  key word" onChange={event => setFilter(event.target.value)}/>
            <button className={styles.btn} type="submit">SEARCH QUESTION</button> 
        </form>
    )
}