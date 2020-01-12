import React from 'react';
import Button from './Button';
import SearchInput  from './SearchInput';
import styles from './AddItem.module.css'


const AddItem = () => {
    return(
        <div className={styles.mainDiv}>
            <SearchInput />
            <Button />
        </div>
    )
}

export default AddItem;