import React from 'react'
import { Link } from 'react-router-dom'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import styles from './Item.module.css'
import firebase from '../../firebase'

export function Item({ question }) {

  function handleVote() {



    firebase.database().ref('forum/' + question.qid).update({

      votedBy: [...question.votedBy,
      {
        userid: 'krzychi',
        createdAt: Date.now()
      }
      ]
      ,
      email: 'email',

    });
    //     const voteRef = firebase.database().ref('forum').push.doc(question.uid)
    //     voteRef.get().then(doc => {

    //         if (doc.exists) {
    //             const previousVotes = doc.data().votes;
    //             const vote = { votedBy: { id: 'unknown', name: 'unknown' } }
    //             const updatedVotes = [...previousVotes, vote];
    //             voteRef.update({ votes: updatedVotes })
    //         }

    // }
    //     )
  }


  function handleDelete() {
    firebase.database().ref('forum').child(question.qid).remove()
  }
  return (

    <div className={styles.mainDiv}>

      <div className={styles.questionSection}>
        <div className={styles.title}>  {question.title}</div>
        <div>{question.description}</div>
        <Link to={`/forum/${question.qid}`} style={{border:"1px solid black"}}>DISCUSS</Link>
        <div onClick={handleDelete} style={{border:"1pxsolid black"}}>DELETE</div>
      </div>
      <div className={styles.likesSection}>
        <div style={{margin:"0"}}>{question.votedBy.length - 1}</div>
        <div style={{margin:'0', cursor:"pointer",display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"35px", fontSize:"200%"}} onClick={handleVote}>
          <span>^</span>
        </div>
      </div>
    </div>




  )

}