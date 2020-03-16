import React from 'react'
import firebase from '../'
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
    let questionDelRef = db.collection('forum').doc(question.qid);
    questionDelRef.delete()
  }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.questionSection}>
        <div className={styles.title}>  {question.title}</div>
        <div className={styles.description}>{question.description}</div>
        <div className={styles.description1}>
          <Link to={`/forum/${question.qid}`} className={styles.link}>DISCUSS</Link>
          <div onClick={handleDelete} className={styles.handleDelete} >DELETE</div>
        </div>
      </div>
      <div className={styles.likesSection} onClick={handleVote}>
        <div className={styles.likeSection1}>{question.votes.length}</div>
        <div className={styles.likeSection2} >
          <span>&#8593;</span>
        </div>
      </div>
    </div>
  )
}