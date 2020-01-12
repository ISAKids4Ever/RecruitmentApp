import React, { useState } from 'react';
import styles from './Forum.module.css'
import Filters from '../components/Forum/Filters'
import ItemsList from '../components/Forum/ItemsList'
import AddItem from '../components/Forum/AddItem'
import { database } from 'firebase';

let RandomQuestions = [{ question: "PYTANIE PIERWSZE", date: "14-05-2015", lastRespDate: "15-09-2019", likes: "11", respAmount: "9" },
  { question: "PYTANIE DRUGIE", date: "25-08-2009", lastRespDate: "22-10-2010", likes: "69", respAmount: "55" },
  { question: "PYTANIE TRZECIE", date: "22-09-1994", lastRespDate: "11-11-2011", likes: "69", respAmount: "99" }]

const  Forum = () => {

const [ question, setQuestion ] = useState("");
const [ randomQuestions, setRandomQuestion ] = useState(RandomQuestions)

  

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("handleSubmit")
  const newQuestion = {'question':question}
  const newArr = [...RandomQuestions, newQuestion];
  RandomQuestions = [...newArr]
  setRandomQuestion(newArr);

 

  console.log(randomQuestions)

} 

const handleChange = (e) => {
  console.log(e.target.value)
  console.log("GREETINGS")
  setQuestion(e.target.value);
  console.log("question: " , question)


}
  return (
    <div className={styles.mainDiv}>

      <Filters />
      <ItemsList Questions={randomQuestions}/>
      <AddItem handleChange={handleChange} handleSubmit={handleSubmit}/>
     

    </div>
  );
}

export default Forum;