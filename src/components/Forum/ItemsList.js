import React, { useState, useEffect } from 'react'
import Item from './Item'
import styles from './ItemsList.module.css'
import firebase from '../../firebase'
import {SearchItem} from 'components';

export function ItemsList() {
    const [questions, setQuestions ] = useState([]);
    const [sortType, setSortType] = useState(false)
    const [votesSort, setVotesSort] = useState(false)
    const [isFilter, setIsFilter] = useState(false)

useEffect(() => {
    firebase.database().ref('forum').on("value", data => {
        const forumQuestion =  data.val()
        console.log("PTRP", prepareData(forumQuestion))
        setQuestions(prepareData(forumQuestion))
     })
     
}, [])
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
      return 0
  }
  function handleFilters() {
    setIsFilter((value) => !value)
}

    return(
    
        <div className={styles.mainDiv}>
            <div>
                <button className={styles.filterToggle} onClick={handleFilters}>FILTERS</button>
            <div className={isFilter ? styles.sortingDiv : styles.none}>
                
                <SearchItem />
                <div  className={styles.sorting}>
                <button onClick={handleDateSort}>SORT BY DATE</button>
                <button onClick={handleVotesSort}>SORT BY LIKES</button>
                <button onClick={handleVotesSort}>SORT BY COMMENTS</button>
                </div>
           


            </div>
            </div>
           
        {questions.map((question, index) => {
          return  <Item key={question.id}  question={question} index={index+1}/>
        })}
    </div>
     )
}