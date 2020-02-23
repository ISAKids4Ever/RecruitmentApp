import React, { useEffect } from 'react'
import CreateLink from '../components/Forum/CreateItem'
import SearchLink from '../components/Forum/SearchItem'
import ItemsList from '../components/Forum/ItemsList'
import firebaseApp from '../firebase'
import styles from './Forum.module.css'

function Forum() {
  // const newPost = { title:"new title", question:"new question"}
  // useEffect(()=>{
  //   firebaseApp.db.collection('forum').add(newPost);

  // },[])

  return(
    <div className={styles.mainDiv}>
      <CreateLink />
      <ItemsList />
    </div>
  )
}

export default Forum