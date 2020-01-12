import React from 'react';
import Item from './Item';
import { Animate, AnimateGroup } from 'react-simple-animate'
import styles from './ItemsList.module.css'





const ItemsList = (props) => {
    const { Questions } = props
    return (
        <div>
            <div>FILTRY</div>
           
                {Questions.map((data, index) => <AnimateGroup play >
                    <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} duration={1.5} sequenceIndex={index}>
                        <Item question={data.question} key={index} />
                        </Animate>
                        </AnimateGroup >)}

             


        </div>
    )
}

export default ItemsList;