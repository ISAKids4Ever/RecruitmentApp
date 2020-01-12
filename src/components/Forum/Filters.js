import React from 'react';
import SearchInput from './SearchInput';
import Button from './Button'
import styles from './Filters.module.css';

const Filters = () => {
    return(
        <div className={styles.mainDiv}>
            <SearchInput />
            <Button name="WG DATY" icon="↑"/>
            <Button name="WG LIKOW" icon="↑"/>
            <Button name="ILOS ODP" icon="↑"/>
        </div>
    )
}

export default Filters;