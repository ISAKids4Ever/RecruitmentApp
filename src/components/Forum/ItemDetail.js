import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
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
     })
     
}, [])



function handleAddComment() {
  firebase.database().ref('forum/' + props.match.params.qid).update({
            
    comments: [ ...question.comments,
       { createdBy:'krzychi',
        createdAt: Date.now(),
      comment:commentText
      }
    ]
    
  
  });
}
  

  return(
    <div>Loading ...
      


<textarea
        onChange={event => setCommentText(event.target.value)}
        value={commentText}
        rows="6"
        cols="60"
      />
      <div>
        <button onClick={handleAddComment}>AddCommnet</button>
      </div>
      {question.comments.map((comment)=>{
        
    return(<div>
      <div>{comment.comment}</div>
    <div>{formatDistanceToNow(comment.createdAt)}</div>
    <div>{comment.createdBy}</div>
      </div>)
  })}
    </div>
  // ) : (
  //   <div>
      // {/* <div>PYTANIE: {item.description}</div>
    //   <div>TYTUŁ: {item.title}</div>

    //   {item.comments.map((comment, index) => {
    //     return (
    //       <div>
    //         {comment.text} Dodano: {formatDistanceToNow(comment.creted)}
    //       </div>
    //     );
    //   })}
    // </div> */}
  );
}

export default ItemDetails;
