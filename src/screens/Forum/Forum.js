import React, { useEffect } from 'react'
import firebaseApp from '../../firebase'
import firebase from '../../firebase'

import { ItemsList } from "components";

import styles from './Forum.module.css'
import { Link } from 'react-router-dom';

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
      <h1>FORUM</h1>
      <h1>You wanna create a topic/ask question? <Link to="forum/create">CLICK HERE</Link></h1>
      {/* <CreateItem addQuestion={addQuestion}/> */}
      <ItemsList />
      </div>
    </div>
  )
}