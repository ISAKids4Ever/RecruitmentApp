import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
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


  useEffect(() => {
    firebase.database().ref('forum').child(props.match.params.qid).on("value", data => {
      const forumQuestion = data.val()
      setQuestions(forumQuestion)

    })

  }, [])



  function handleAddComment() {
    firebase.database().ref('forum/' + props.match.params.qid + '/comments').once("value", snapshot => {
      if (snapshot.exists()) {
        const email = snapshot.val();
        firebase.database().ref('forum/' + props.match.params.qid).update({
          comments: [
            ...question.comments,
            {
              createdBy: 'krzychi',
              createdAt: Date.now(),
              comment: commentText
            }
          ]
        });
      } else {
        firebase.database().ref('forum/' + props.match.params.qid).update({
          comments: [
            {
              createdBy: 'krzychi',
              createdAt: Date.now(),
              comment: commentText
            }
          ]
        });
      }
    });
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.questionSection}>
        <div style={{ width: "70%" }}>
          <div className={styles.questionSectionTitle}>{question.title}</div>
          {question.created && <div style={{ width: '100%', color: "black" }}>Asked  {formatDistanceToNow(question.created, { addSuffix: true })}</div>}        <div className={styles.questionDescription}>{question.description}</div>
        </div>
        <div style={{ width: "30%", fontWeight: "bolder", fontSize: "150%" }} className={styles.likes}>LIKES: {question.votedBy.length}</div>
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.commentsTitle}>COMMENTS:</div>
        {question.comments != undefined && question.comments.length > 1 && question.comments.map((comment) => {
          return (<div className={styles.commentDiv} style={{ display: "flex", flexDirection: "column", width: "90%" }}>
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ marginRight: "1%", width: "50%", textAlign: "start", color: "black" }}>User:{comment.createdBy}</div>
              <div style={{ width: "50%", textAlign: "end", color: "black" }}>Added: {comment.createdAt && formatDistanceToNow(comment.createdAt)} ago</div>
            </div>
            <div style={{ fontSize: "150%", width: "100%", textAlign: "start" }}>{comment.comment}</div>
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
