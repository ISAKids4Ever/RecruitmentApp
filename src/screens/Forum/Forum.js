import React, { useEffect, useState } from 'react'
import firebaseApp from '../../firebase'
import firebase from '../../firebase'

import { ItemsList } from "components";
import {CreateItem} from 'components'
import styles from './Forum.module.css'
import { Link } from 'react-router-dom';

export function Forum() {
  const [clicked, setClicked] = useState(false)
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
      {clicked ||  <h1>Do you wanna create a topic/ask question? <a style={{cursor:"pointer", color:"black"}} onClick={() => setClicked(!clicked)}>CLICK HERE</a></h1> }
 
      <CreateItem addQuestion={addQuestion} clicked={clicked}/>
      <ItemsList />
      </div>
    </div>
  )
}