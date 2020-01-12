import React from 'react';
import Item from './Item'
import styles from './ItemsList.module.css'





const ItemsList = (props) => {
   const { Questions } = props
    return(
        <div>
              <div>FILTRY</div>
      {Questions.map((data, index) => <Item question={data.question} date={data.date} key={index} />)}
        </div>
    )
}

export default ItemsList;