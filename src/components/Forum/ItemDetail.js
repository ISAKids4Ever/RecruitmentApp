import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

import { addQuestion } from "services";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import styles from './ItemDetail.module.css'

const INIT_STATE = {
  comments: [],
  title: "",
  created: "",
  description: "",
  votes: [],
  postedBy: {
    user: "",
    id: ""
  }
}


export function ItemDetails(props) {
  const [commentText, setCommentText] = useState("");
  const [questions, setQuestions] = useState(INIT_STATE)

  const questionId = props.match.params.qid;
  const questionRef = db.collection('forum').doc(questionId);

  useEffect(() => {
    watchComments()
  }, [])

  function watchComments() {
    questionRef.onSnapshot(function (doc) {
      setQuestions(doc.data())
    });
}

  return (
    <div className={styles.mainDiv}>
      <div className={styles.questionSection}>
        <div className={styles.questionSection1} >
          <div className={styles.questionSectionTitle}>{questions.title}</div>
          {
            questions.created && (
              <div className={styles.questionSectionTitle1}>
                Asked  {formatDistanceToNow(questions.created, { addSuffix: true })}
              </div>
            )
          }
          <div className={styles.questionDescription}>{questions.description}</div>
        </div>
        <div className={`${styles.questionSectionTitle2} ${styles.likes}`}>LIKES: {questions.votes.length}</div>
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.commentsTitle}>COMMENTS:</div>
        {questions.comments.map((comment, index) => {
          return (
          <div className={styles.commentDiv} key={index.toString()}>
            <div className={styles.commentDiv1}>
              <div className={styles.commentDiv2}>
                USER:{comment.postedBy.user}
              </div>
              <div className={styles.commentDiv3}>
                Added: {formatDistanceToNow(comment.created)} ago
              </div>
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
          <button 
            className={styles.addCommentBtn} 
            onClick={() => addQuestion(questionId, commentText, 'id', 'username')}
          >
              AddCommnet
          </button>
        </div>
      </div>
    </div>
  );
}
