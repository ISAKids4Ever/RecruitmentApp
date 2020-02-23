import React, { useState } from 'react'
import Item from './Item'
import styles from './ItemsList.module.css'
import firebase from '../../firebase'
import SearchItem from './SearchItem';

function ItemsList() {
    const [questions, setQuestions ] = useState([]);
    const [sortType, setSortType] = useState(false)
    const [votesSort, setVotesSort] = useState(false)
    const [isFilter, setIsFilter] = useState(false)
//   React.useEffect(()=>{
//     getLinks()
// }, [])
// function handleDateSort() {

//     setSortType(!sortType)
//     getLinks()
// }
// function handleVotesSort() {
//     if(votesSort){
//         firebase.db.collection('forum').orderBy("votes", "desc").onSnapshot(handleSnapshot)
//         setVotesSort(false)
//     } else {
//         firebase.db.collection('forum').orderBy("votes", "asc").onSnapshot(handleSnapshot)
// setVotesSort(true)
//     }


// }
// function getLinks() {
//     if(!sortType){
//         firebase.db.collection('forum').onSnapshot(handleSnapshot)

//     } else {

//         firebase.db.collection('forum').orderBy("created", "desc").onSnapshot(handleSnapshot)

//     }

// }

// function handleSnapshot(snapshot) {
//     const questions = snapshot.docs.map(doc => {
     
//         return { uid:doc.id, ...doc.data() }
        
//     })
//      setQuestions(questions);
//       }


//       function handleFilters() {
//           setIsFilter((value) => !value)
//       }
    return(<div></div>
        // <div className={styles.mainDiv}>
        //     <div>
        //         <button className={styles.filterToggle} onClick={handleFilters}>FILTERS</button>
        //     <div className={isFilter ? styles.sortingDiv : styles.none}>
                
        //         <SearchItem />
        //         <div  className={styles.sorting}>
        //         <button onClick={handleDateSort}>SORT BY DATE</button>
        //         <button onClick={handleVotesSort}>SORT BY LIKES</button>
        //         <button onClick={handleVotesSort}>SORT BY COMMENTS</button>
                // </div>
           


            // </div>
            // </div>
           
    //     {questions.map((question, index) => {
    //       return  <Item key={question.id}  question={question} index={index+1}/>
    //     })}
    // </div>
     )
}

export default ItemsList