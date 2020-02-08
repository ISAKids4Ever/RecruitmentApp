import React, { useState } from 'react'
import Item from './Item'
import firebase from '../../firebase'

function ItemsList() {
    const [questions, setQuestions ] = useState([]);
    
  React.useEffect(()=>{
    getLinks()
}, [])

function getLinks() {
  firebase.db.collection('forum').orderBy("created", "desc").onSnapshot(handleSnapshot)

}

function handleSnapshot(snapshot) {
    const questions = snapshot.docs.map(doc => {
        console.log("DOCID", doc.id)

        console.log("QUESTIONY", { id:doc.id, ...doc.data() } )

        return { uid:doc.id, ...doc.data() }
        
    })
     setQuestions(questions);
      }
    return(
        <div>
        {questions.map((question, index) => {
            console.log("PYTANIE", question)
          return  <Item key={question.id}  question={question} index={index+1}/>
        })}
    </div>
    )
}

export default ItemsList