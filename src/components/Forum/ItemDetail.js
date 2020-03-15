import React, { useEffect, useState } from "react";
import {db} from "../../firebase";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import styles from './ItemDetail.module.css'

const INIT_STATE = {
  comments: [],
  title: "",
  created: "",
  description: "",
  votedBy: []
}



export function ItemDetails(props) {
  const [commentText, setCommentText] = React.useState("");
  const [question, setQuestions] = useState(INIT_STATE)

  const questionId = props.match.params.qid;
  const questionRef = db.collection('forum').doc(questionId);


 useEffect(() => {

  questionRef.get().then(doc => {
    setQuestions({...doc.data(), id: doc.id})
  })

  
 }, [])



  function handleAddComment() {

  questionRef.get().then(doc => {
    if(doc.exists) {
      const previosuComments = doc.data().comments
      const newComment = {
        postedBy: {id:"id", user:"username"},
        created: Date.now(),
        text: commentText
      }
      const updatedComments = [...previosuComments, newComment];
      questionRef.update({comments: updatedComments})
      setQuestions(prevState => ({...prevState, comments: updatedComments}))
    }
  })
  console.log("detail", question)

  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.questionSection}>
        <div style={{ width: "70%" }}>
          <div className={styles.questionSectionTitle}>{question.title}</div>
          {question.created && <div style={{ width: '100%', color: "black" }}>Asked  {formatDistanceToNow(question.created, { addSuffix: true })}</div>}        <div className={styles.questionDescription}>{question.description}</div>
        </div>
        {/* <div style={{ width: "30%", fontWeight: "bolder", fontSize: "150%" }} className={styles.likes}>LIKES: {question.votes.length}</div> */}
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.commentsTitle}>COMMENTS:</div>
        { question.comments.map((comment) => {
          return (<div className={styles.commentDiv} style={{ display: "flex", flexDirection: "column", width: "90%" }}>
            <div style={{ display: "flex", width: "100%" }}>
        <div style={{ marginRight: "1%", width: "50%", textAlign: "start", color: "black" }}>USER:{comment.postedBy.user}</div>
              <div style={{ width: "50%", textAlign: "end", color: "black" }}>Added: {formatDistanceToNow(comment.created)} ago</div>
            </div>
            <div style={{ fontSize: "150%", width: "100%", textAlign: "start" }}>{comment.text}</div>
          </div>)
        })}
      </div>
      <div className={styles.addComment}>
        <textarea
          className={styles.textArea}
          placeholder="Add comment"
          onChange={event => setCommentText(event.target.value)}
          value={commentText}
        />
        <div>
          <button className={styles.addCommentBtn} onClick={handleAddComment}>AddCommnet</button>
        </div>
      </div>
    </div>
  );
}
