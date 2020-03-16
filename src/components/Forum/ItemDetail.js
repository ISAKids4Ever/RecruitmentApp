import React, { useEffect, useState } from "react";
import {db} from "../../firebase";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import styles from './ItemDetail.module.css'

const INIT_STATE = {
  comments: [],
  title: "",
  created: "",
  description: "",
  votes: [],
  postedBy:{
    user:"",
    id:""
  }
}


export function ItemDetails(props) {
  const [commentText, setCommentText] = useState("");
  const [question, setQuestions] = useState(INIT_STATE)

  const questionId = props.match.params.qid;
  const questionRef = db.collection('forum').doc(questionId);


 useEffect(() => {

  questionRef.get().then(doc => {
    setQuestions({...doc.data(), id: doc.id,})
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

  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.questionSection}>
        <div className={styles.questionSection1} >
          <div className={styles.questionSectionTitle}>{question.title}</div>
          {question.created && 
          <div className={styles.questionSectionTitle1}>Asked  {formatDistanceToNow(question.created, { addSuffix: true })}</div>}        <div className={styles.questionDescription}>{question.description}</div>
        </div>
        <div className={styles.questionSectionTitle2} className={styles.likes}>LIKES: {question.votes.length}</div>
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.commentsTitle}>COMMENTS:</div>
        { question.comments.map((comment) => {
          return (<div className={styles.commentDiv}>
            <div className={styles.commentDiv1}>
        <div className={styles.commentDiv2}>USER:{comment.postedBy.user}</div>
              <div className={styles.commentDiv3}>Added: {formatDistanceToNow(comment.created)} ago</div>
            </div>
            <div className={styles.commentDiv4}>{comment.text}</div>
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
