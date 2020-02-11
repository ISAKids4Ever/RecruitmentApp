import React, { useState } from 'react'
import Item from './Item'
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
    console.log("SORT TYPE Z GET LINKA", sortType)
    if(!sortType){
        console.log("TERAZ Z NIE SORT TYPE")
        firebase.db.collection('forum').onSnapshot(handleSnapshot)

    } else {
        console.log("TERAZ Z  SORT TYPE")

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
        <div>
            <div>
                SORTUJ PO DACIE:
                <button onClick={handleDateSort}>KLIK</button>
                SORTUJ PO Lajkach:
                <button onClick={handleVotesSort}>KLIK</button>
            </div>
        {questions.map((question, index) => {
            console.log("PYTANIE", question)
          return  <Item key={question.id}  question={question} index={index+1}/>
        })}
    </div>
    )
}

export default ItemsList