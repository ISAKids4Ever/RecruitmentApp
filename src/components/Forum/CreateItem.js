import React, { useState } from 'react'
import useFormValidation from '../../hooks/useFormValidation'
import validateCreate from '../../services/validateCreate'
import firebase from '../../firebase'
import uuid from 'react-uuid'
import styles from './CreateItem.module.css'


const INITIAL_STATE = {
    title: "",
    description: ""
}
function CreateItem(props) {
    const { handleSubmit, handleChange, values } = useFormValidation(INITIAL_STATE, validateCreate, handleCreateLink)
    const [isClicked, setIsClicked] = useState(false)
    function handleCreateLink() {
            const { title, description } = values;
            const newLink = {
                title,
                description,
                votedBy: [{
                    user:"unknown",
                    date:Date.now()
                }],
                comments: [{
                    createdBy:"",
                    comment:"",
                    createdAt:"",
                    
                }],
                created: Date.now(),
                id:uuid()
            }
            console.log("NEWLINK", newLink)
            firebase.database().ref('forum').push(newLink);
            
            
        

    }
    function handleClick() {
        setIsClicked(value => !value)
    }
    return(
        <form onSubmit={handleSubmit} className={styles.forum}>
            <input className={isClicked ? styles.input : styles.none}
               name="title"
               placeholder="Tytuł"
               autoComplete="off"
               onChange={handleChange}
               value={values.title}
               type="text"/>
            <input
             
             className={isClicked ? styles.input : styles.none}
             name="description"
             placeholder="Pytanie"
             autoComplete="off"
             onChange={handleChange}
             value={values.description}
             type="text"/>
            <button type="submit" className={styles.button} onClick={handleClick}>ADD QUESTION</button>
            
        </form>
    )
}

export default CreateItem