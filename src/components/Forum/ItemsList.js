import React, { useState, useEffect } from 'react'
import styles from './ItemsList.module.css'
import {db} from '../../firebase'
import { SearchItem, Item } from 'components';

export function ItemsList() {
    const [questions, setQuestions] = useState([]);
    const [sortType, setSortType] = useState(false)
    const [votesSort, setVotesSort] = useState(false)
    const [isFilter, setIsFilter] = useState(false)

    useEffect(() => {
        // firebase.database().ref('forum').on("value", data => {
        //     const forumQuestion = data.val()
        //     setQuestions(prepareData(forumQuestion))
        // })
        function handleSnapshot(snapshot) {
            const items = snapshot.docs.map(doc => {
                return { qid: doc.id, ...doc.data() }
            })
            console.log("ITEMY", items)
            
            setQuestions(items)
        }
        db.collection("forum").onSnapshot(handleSnapshot)

    }, [])
    useEffect(() => {

    }, [questions])
    const prepareData = data => {
        return Object.entries(data).map(arr => {
            const [qid, value] = arr;
            return {
                qid,
                ...value
            };
        });
    };

    function handleDateSort() {
        return 0;
    }

    function handleVotesSort() {

        let topSort = questions.slice().sort((q1, q2)=>{
            return q2.votes.length - q1.votes.length
        })
        let bottomSort = questions.slice().sort((q1, q2)=>{
            return q1.votes.length - q2.votes.length
        })

       !sortType ? setQuestions(topSort) : setQuestions(bottomSort)
       setSortType(prevState => !prevState)
    }

    function handleFilters() {
        setIsFilter((value) => !value)
    }

    return (
        <div className={styles.mainDiv}>
            <div>
                <button className={styles.filterToggle} onClick={handleFilters}>FILTERS</button>
                <div className={isFilter ? styles.sortingDiv : styles.none}>

                    <SearchItem />
                    <div className={styles.sorting}>
                        <button onClick={handleDateSort}>SORT BY DATE</button>
                        <button onClick={handleVotesSort}>SORT BY LIKES</button>
                        <button onClick={handleVotesSort}>SORT BY COMMENTS</button>
                    </div>
                </div>
            </div>
            {questions.map((question, index) => {
                return <Item key={question.id} question={question} index={index + 1} />
            })}
        </div>
    )
}