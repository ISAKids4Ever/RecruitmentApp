import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Item.module.css'
import {db} from '../../firebase'

export function Item({ question }) {

  function handleVote() {

    const voteReference = db.collection('forum').doc(question.qid);
    voteReference.get().then(doc => {
      if(doc.exists) {
        const prevVotes = doc.data().votes;
        const newVote = { 
          votedBy: {
            id: "userid",
            username:"username"
          }}
          const updatedVotes = [...prevVotes, newVote]
          voteReference.update({ votes: updatedVotes })
      }
    })
  }

  function handleDelete() {
    // firebase.database().ref('forum').child(question.qid).remove()
  }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.questionSection}>
        <div className={styles.title}>  {question.title}</div>
        <div className={styles.description}>{question.description}</div>
        <div style={{ display: "flex" }}>
          <Link to={`/forum/${question.qid}`} style={{ margin: "0", padding: "2px", fontSize: "120%" }}>DISCUSS</Link>
          <div onClick={handleDelete} style={{ border: "1pxsolid black", margin: "0", padding: "2px", fontSize: "120%" }}>DELETE</div>
        </div>
      </div>
      <div className={styles.likesSection}>
        <div style={{ margin: "0" }}>{question.votes.length}</div>
        <div style={{ margin: '0', cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "35px", fontSize: "200%" }} onClick={handleVote}>
          <span>^</span>
        </div>
      </div>
    </div>
  )
}