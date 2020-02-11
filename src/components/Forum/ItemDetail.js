import React from "react";
import firebase from "../../firebase";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function ItemDetails(props) {
  const [item, setItem] = React.useState(null);
  const [commentText, setCommentText] = React.useState("");
  const itemId = props.match.params.uid;

  React.useEffect(() => {
    getItem();
  }, []);

  function getItem() {
    const itemRef = firebase.db.collection("forum").doc(itemId);
    itemRef.get().then(doc => {
      setItem({ ...doc.data(), uid: doc.id });
    });
  }

  function handleAddComment() {
    firebase.db
      .collection("forum")
      .doc(itemId)
      .get()
      .then(doc => {
        if (doc.exists) {
          const previousComments = doc.data().comments;
          const comment = {
            postedBy: { id: "unknown", name: "user.unknown" },
            creted: Date.now(),
            text: commentText
          };
          const updatedComments = [...previousComments, comment];
          firebase.db
            .collection("forum")
            .doc(itemId)
            .update({ comments: updatedComments });
          setItem(prevState => ({
            ...prevState,
            comments: updatedComments
          }));
          setCommentText("");
        }
      });
  }

  return !item ? (
    <div>Loading ...</div>
  ) : (
    <div>
      <div>PYTANIE: {item.description}</div>
      <div>TYTUŁ: {item.title}</div>
      <textarea
        onChange={event => setCommentText(event.target.value)}
        value={commentText}
        rows="6"
        cols="60"
      />
      <div>
        <button onClick={handleAddComment}>AddCommnet</button>
      </div>
      {item.comments.map((comment, index) => {
        return (
          <div>
            {comment.text} Dodano: {formatDistanceToNow(comment.creted)}
          </div>
        );
      })}
    </div>
  );
}

export default ItemDetails;
