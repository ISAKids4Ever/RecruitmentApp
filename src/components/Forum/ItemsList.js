import React from 'react';
import Item from './Item'
import styles from './ItemsList.module.css'

const RandomQuestions = [{ question: "PYTANIE PIERWSZE", date: "14-05-2015", lastRespDate: "15-09-2019", likes: "11", respAmount: "9" },
  { question: "PYTANIE DRUGIE", date: "25-08-2009", lastRespDate: "22-10-2010", likes: "69", respAmount: "55" },
  { question: "PYTANIE TRZECIE", date: "22-09-1994", lastRespDate: "11-11-2011", likes: "69", respAmount: "99" }]



const ItemsList = () => {



    return(
        <div>
              <div>FILTRY</div>
      {RandomQuestions.map((data, index) => <Item question={data.question} key={index} />)}
        </div>
    )
}

export default ItemsList;