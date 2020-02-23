import React, { useState } from 'react'
import Item from './Item'
import styles from './ItemsList.module.css'
import firebase from '../../firebase'

function ItemsList() {
    const [questions, setQuestions ] = useState([]);
    const [sortType, setSortType] = useState(false)
    const [votesSort, setVotesSort] = useState(false)
  React.useEffect(()=>{
    getLinks()
}, [])
function handleDateSort() {

    setSortType(!sortType)
    getLinks()
}
function handleVotesSort() {
    if(votesSort){
        firebase.db.collection('forum').orderBy("votes", "desc").onSnapshot(handleSnapshot)
        setVotesSort(false)
    } else {
        firebase.db.collection('forum').orderBy("votes", "asc").onSnapshot(handleSnapshot)
setVotesSort(true)
    }


}
function getLinks() {
    if(!sortType){
        firebase.db.collection('forum').onSnapshot(handleSnapshot)

    } else {

        firebase.db.collection('forum').orderBy("created", "desc").onSnapshot(handleSnapshot)

    }

}

function handleSnapshot(snapshot) {
    const questions = snapshot.docs.map(doc => {
     
        return { uid:doc.id, ...doc.data() }
        
    })
     setQuestions(questions);
      }
    return(
        <div className={styles.mainDiv}>
            <div className={styles.sorting}>
                <button onClick={handleDateSort}>SORT BY DATE</button>
                <button onClick={handleVotesSort}>SORT BY LIKES</button>
                <button onClick={handleVotesSort}>SORT BY COMMENTS</button>


            </div>
        {questions.map((question, index) => {
          return  <Item key={question.id}  question={question} index={index+1}/>
        })}
    </div>
    )
}

export default ItemsList