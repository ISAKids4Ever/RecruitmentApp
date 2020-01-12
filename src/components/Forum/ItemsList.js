import React from 'react';
import Item from './Item'
import styles from './ItemsList.module.css'





const ItemsList = (props) => {
   const { RandomQuestions } = props
    return(
        <div>
              <div>FILTRY</div>
      {RandomQuestions.map((data, index) => <Item question={data.question} key={index} />)}
        </div>
    )
}

export default ItemsList;