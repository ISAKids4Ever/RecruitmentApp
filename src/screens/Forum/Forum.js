import React, { useEffect } from 'react'
import firebaseApp from '../../firebase'
import firebase from '../../firebase'

import { CreateItem, ItemsList } from "components";

import styles from './Forum.module.css'

export function Forum() {
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


  return(
    <div className={styles.mainDiv}>
      <div className={styles.content}>
      <CreateItem addQuestion={addQuestion}/>
      <ItemsList />
      </div>
    </div>
  )
}