import React, { useState, useEffect } from 'react'
import styles from './ItemsList.module.css'
import {db} from '../../firebase'
import { SearchItem, Item } from 'components';

export function ItemsList() {
    const [questions, setQuestions] = useState([]);
    const [votesSort, setVotesSort] = useState(false)
    const [dateSort, setDateSort] = useState(false)
    const [commentsSort, setCommentsSort] = useState(false)
    const [isFilter, setIsFilter] = useState(false)
    const [allQuestions, setAllQuestions] = useState([])


    useEffect(() => {       
        // TODO: Unsubscribe to this function 
        db.collection("forum").onSnapshot(handleSnapshot)
    }, [])




    function handleSnapshot(snapshot) {
        const items = snapshot.docs.map(doc => {
            return { qid: doc.id, ...doc.data() }
        })
        
        setQuestions(items)
        setAllQuestions(items)
    }

    function handleDateSort() {
        let topSort = questions.slice().sort((q1, q2)=>{
            return q2.created - q1.created
        })
        let bottomSort = questions.slice().sort((q1, q2)=>{
            return q1.created - q2.created
        })

       !dateSort ? setQuestions(topSort) : setQuestions(bottomSort)
       setDateSort(prevState => !prevState)
        }

    function handleVotesSort() {

        let topSort = questions.slice().sort((q1, q2)=>{
            return q2.votes.length - q1.votes.length
        })
        let bottomSort = questions.slice().sort((q1, q2)=>{
            return q1.votes.length - q2.votes.length
        })

       !votesSort ? setQuestions(topSort) : setQuestions(bottomSort)
       setVotesSort(prevState => !prevState)
    }

    function handleFilters() {
        setIsFilter((value) => !value)
    }

    function handleCommentsSort() {
        let topSort = questions.slice().sort((q1, q2)=>{
            return q2.comments.length - q1.comments.length
        })
        let bottomSort = questions.slice().sort((q1, q2)=>{
            return q1.comments.length - q2.comments.length
        })

       !commentsSort ? setQuestions(topSort) : setQuestions(bottomSort)
       setCommentsSort(prevState => !prevState)
    }
    function searchedDisplay(searched) {
        return setQuestions(searched)
    }

    return (
        <div className={styles.mainDiv}>
            <div>
                <button className={styles.filterToggle} onClick={handleFilters}>FILTERS</button>
                <div className={isFilter ? styles.sortingDiv : styles.none}>

                    <SearchItem allQuestions={allQuestions} searchedDisplay={searchedDisplay} />
                    <div className={styles.sorting}>
                        <button onClick={handleDateSort}>SORT BY DATE</button>
                        <button onClick={handleVotesSort}>SORT BY LIKES</button>
                        <button onClick={handleCommentsSort}>SORT BY COMMENTS</button>
                    </div>
                </div>
            </div>
            {questions.map((question, index) => {
                return <Item key={question.id} question={question} index={index + 1} />
            })}
        </div>
    )
}