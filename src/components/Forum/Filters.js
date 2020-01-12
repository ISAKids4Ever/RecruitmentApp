import React from 'react';
import SearchInput from './SearchInput';
import Button from './Button'
import styles from './Filters.module.css';

const Filters = () => {
    return(
        <div className={styles.mainDiv}>
            <SearchInput />
            <Button name="WG DATY" icon="ikona"/>
            <Button name="WG LIKOW" icon="ikona"/>
            <Button name="ILOS ODP" icon="ikona"/>
        </div>
    )
}

export default Filters;