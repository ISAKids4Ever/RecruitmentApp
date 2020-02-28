import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import styles from './ItemDetail.module.css'
const INIT_STATE = {
  comments:[],
  title:"",
  created:"",
  description:"",
  votedBy:[]
}



function ItemDetails(props) {
  // const [item, setItem] = React.useState(null);
  const [commentText, setCommentText] = React.useState("");
  // const itemId = props.match.params.uid;
  const [question, setQuestions] = useState(INIT_STATE)


  useEffect(() => {
    firebase.database().ref('forum').child(props.match.params.qid).on("value", data => {
        const forumQuestion =  data.val()
        setQuestions(forumQuestion)
        console.log("e", question.comments)
     })
     
}, [])



function handleAddComment() {
  console.log("d", question.comments)
  firebase.database().ref('forum/' + props.match.params.qid + '/comments').once("value", snapshot => {
    if (snapshot.exists()){
       console.log("exists!");
       const email = snapshot.val();
       firebase.database().ref('forum/' + props.match.params.qid).update({
            
        comments: [ ...question.comments,
           { createdBy:'krzychi',
            createdAt: Date.now(),
            comment:commentText
          }
        ]
        
      
      });
     } else {
      firebase.database().ref('forum/' + props.match.params.qid).update({
            
        comments: [
           { createdBy:'krzychi',
            createdAt: Date.now(),
            comment:commentText
          }
        ]
        
      
      });
     }
 });
 

}
  

  return(
    <div className={styles.mainDiv} style={{width:"100%", display:"flex", flexDirection:"column", height:"100vh", backgroundImage:"linear-gradient(to right, #3a6073, #ff8008)"}}>
      <div className={styles.questionSection}>
  <div className={styles.questionSectionTitle}>{question.title}</div>
  <div>{question.description}</div>
      </div>


<div className={styles.commentsContainer}>
  <div className={styles.commentsTitle}>COMMENTS:</div>
{question.comments!=undefined && question.comments.length>1 && question.comments.map((comment)=>{
        
        return(<div className={styles.commentDiv} style={{display:"flex", flexDirection:"column", width:"100%"}}>
          <div style={{display:"flex"}}>
          <div style={{marginRight:"1%"}}>User:{comment.createdBy}</div>
          {/* <div>Added: {formatDistanceToNow(comment.createdAt)}</div> */}
          </div>
          <div>{comment.comment}</div>
      
          </div>)
      })}
</div>

<div className={styles.addComment}>
<textarea
        onChange={event => setCommentText(event.target.value)}
        value={commentText}
        style={{width:"100%", minHeight:"100px"}}
      />
      <div>
        <button className={styles.addCommentBtn} onClick={handleAddComment}>AddCommnet</button>
      </div>
</div>
    
  </div>
  );
}

export default ItemDetails;
