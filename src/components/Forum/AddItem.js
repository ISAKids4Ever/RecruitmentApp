import React from 'react';
import Button from './Button';
import SearchInput  from './SearchInput';
import styles from './AddItem.module.css'


const AddItem = (props) => {
    const { handleChange, handleSubmit } = props
    return(
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
            <SearchInput itemValue="HEJ" placeholder="Wpisz pytanie..." handleChange={handleChange}/>
            <Button name="DODAJ"/>
            </form>
            
        </div>
    )
}

export default AddItem;