import React from "react";
import styles from "./Question.module.css";


function Question(props) {
const { question, date, respAmount} = props
  return (
 <div>
<h1>{question}</h1>
  <p>{date}</p>
<p>{respAmount}</p>
 </div>
  );
}

export default Question;
