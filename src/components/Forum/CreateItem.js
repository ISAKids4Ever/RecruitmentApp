import React from 'react'
import useFormValidation from '../../hooks/useFormValidation'
import validateCreate from '../../services/validateCreate'
import firebaseApp from '../../firebase'
import uuid from 'react-uuid'
import styles from './CreateItem.module.css'


const INITIAL_STATE = {
    title: "",
    description: ""
}
function CreateItem(props) {
    const { handleSubmit, handleChange, values } = useFormValidation(INITIAL_STATE, validateCreate, handleCreateLink)
    function handleCreateLink() {
            const { title, description } = values;
            const newLink = {
                title,
                description,
                votes: [],
                comments: [],
                created: Date.now(),
                id:uuid()
            }
            firebaseApp.db.collection('forum').add(newLink);
            
        

    }
    return(
        <form onSubmit={handleSubmit} className={styles.forum}>
            <input className={styles.input}
               name="title"
               placeholder="Tytuł"
               autoComplete="off"
               onChange={handleChange}
               value={values.title}
               type="text"/>
            <input
             
            className={styles.input}
             name="description"
             placeholder="Pytanie"
             autoComplete="off"
             onChange={handleChange}
             value={values.description}
             type="text"/>
            <button type="submit" className={styles.button}>ADD QUESTION</button>
        </form>
    )
}

export default CreateItem