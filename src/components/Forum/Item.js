import React from 'react'
import { Link } from 'react-router-dom'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import firebase from '../../firebase'

function Item({ question }) {
console.log("REAL QUESTION", question)
    function handleVote() {
     console.log("URUCHSMIAM SIE")
     console.log(question.id)
            const voteRef = firebase.db.collection('forum').doc(question.uid)
            voteRef.get().then(doc => {
            
                if (doc.exists) {
                    const previousVotes = doc.data().votes;
                    const vote = { votedBy: { id: 'unknown', name: 'unknown' } }
                    const updatedVotes = [...previousVotes, vote];
                    voteRef.update({ votes: updatedVotes })
                }
            
        }
            )
    }

    
    function handleDelete() {
        const questionRef = firebase.db.collection('forum').doc(question.uid)
        questionRef.delete().then(() => {
            console.log(`Question with id ${question.uid} deleted`)
        })
            .catch(err => {
                console.error("Error deleting question", err)
            })

    }
    return (
   
            <div>
                <div onClick={handleVote}>
                    Łapka w góre
</div>
                <div>
                    {question.title}, {question.description}
                </div>
                <div>
                    {question.votes.length} votes {formatDistanceToNow(question.created)}
                </div>
                <Link to={`/forum/${question.uid}`}>
                    {question.comments.length > 0 ? `${question.comments.length} comments` : "discuss"}
                </Link>
              <span onClick={handleDelete}>DELETE</span>
                
            </div>
       
    )
    
}

export default Item