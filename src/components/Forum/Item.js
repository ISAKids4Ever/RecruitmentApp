import React from 'react'
import { Link } from 'react-router-dom'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import styles from './Item.module.css'
import {db} from '../../firebase'

export function Item({ question }) {

  const { title, created, description, qid, votes } = question

  function handleVote() {

    const voteReference = db.collection('forum').doc(qid);
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
    let questionDelRef = db.collection('forum').doc(qid);
    questionDelRef.delete()
  }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.questionSection}>
        <div className={styles.title}><Link to={`/forum/${qid}`} className="link-style">{title}</Link></div>
          <div>Added: {formatDistanceToNow(created, {addSuffix:true})}</div>
          <div>Created by unknown</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.description1}>
          <Link to={`/forum/${qid}`} className={styles.link}>DISCUSS</Link>
          <div onClick={handleDelete} className={styles.handleDelete} >DELETE</div>
        </div>
      </div>
      <div className={styles.likesSection} onClick={handleVote}>
        <div className={styles.likeSection1}>{votes.length}</div>
        <div className={styles.likeSection2} >
          <span>&#8593;</span>
        </div>
      </div>
    </div>
  )
}