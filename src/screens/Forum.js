import React, { useEffect } from 'react'
import CreateLink from '../components/Forum/CreateItem'
import SearchLink from '../components/Forum/SearchItem'
import ItemsList from '../components/Forum/ItemsList'
import firebaseApp from '../firebase'
import styles from './Forum.module.css'
import firebase from '../firebase'

function Forum() {
  // const newPost = { title:"new title", question:"new question"}
  // useEffect(()=>{
  //   firebaseApp.db.collection('forum').add(newPost);

  // },[])
   const addQuestion = () => {
    // const userId = firebase.auth().currentUser.uid;
   
    firebase.database().ref('forum').push({
      user:'unknown',
      title:'title',
      question:'question',
      createdAt: new Date().toISOString()
    })
 
  };

  useEffect(()=>{
    console.log("DODAŁEM")
  }, [])
  return(
    <div className={styles.mainDiv}>
      <div className={styles.content}>
      <CreateLink addQuestion={addQuestion}/>
      <ItemsList />
      </div>
    </div>
  )
}

export default Forum