import React from 'react'
import { Link } from 'react-router-dom'
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

  }


  function handleDelete() {
    firebase.database().ref('forum').child(question.qid).remove()
  }
  return (

    <div className={styles.mainDiv}>

      <div className={styles.questionSection}>
        <div className={styles.title}>  {question.title}</div>
        <div className={styles.description}>{question.description}</div>
        <div style={{display:"flex"}}>
           <Link to={`/forum/${question.qid}`} style={{ margin:"0", padding:"2px", fontSize:"120%"}}>DISCUSS</Link>
           <div onClick={handleDelete} style={{border:"1pxsolid black", margin:"0", padding:"2px", fontSize:"120%"}}>DELETE</div>
        </div>
     
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