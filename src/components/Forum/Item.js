import React from 'react'
import { Link } from 'react-router-dom'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import styles from './Item.module.css'
import firebase from '../../firebase'

export function Item({ question }) {

    function handleVote() {
        
  

        firebase.database().ref('forum/' + question.qid).update({
            
            votedBy: [ ...question.votedBy,
               { userid:'krzychi',
                createdAt: Date.now()}
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

                <div>
                    <div className={styles.title}>  {question.title}</div>
                  <div>{question.description}</div> 
                </div>
                
                <div>
    LIKES{question.votedBy.length-1}
    {/* Recent like: {formatDistanceToNow(question.votedBy[question.votedBy.length-1].createdAt)} */}
                </div>
                <Link to={`/forum/${question.qid}`}> 
                   DISCUSS
                 </Link>
                 <div onClick={handleVote}>
                    Łapka w góre
                   
</div>
                 {/* {question.comments.length > 0 ? `${question.comments.length} comments` : "discuss"} */}
              <span onClick={handleDelete}>DELETE</span>
                
            </div>
       
    )
    
}