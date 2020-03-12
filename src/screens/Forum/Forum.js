import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'

import { ItemsList, CreateItem } from "components";
import styles from './Forum.module.css'

export function Forum() {
  const [clicked, setClicked] = useState(false)


  const addQuestion = () => {

    // firebase.database().ref('forum').push({
    //   user: 'unknown',
    //   title: 'title',
    //   question: 'question',
    //   createdAt: new Date().toISOString()
    // })

  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.content}>
        <h1>FORUM</h1>
        {clicked ||
          <h1>Do you wanna create a topic/ask question?
            <a
              style={{ cursor: "pointer", color: "black" }}
              onClick={(e) => {
                e.preventDefault()
                setClicked(!clicked)
              }}
            >
              CLICK HERE
            </a>
          </h1>}
        <CreateItem addQuestion={addQuestion} clicked={clicked} />
        <ItemsList />
      </div>
    </div>
  )
}