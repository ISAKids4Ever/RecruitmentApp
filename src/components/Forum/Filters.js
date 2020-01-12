import React from 'react';
import SearchInput from './SearchInput';
import Button from './Button'
import styles from './Filters.module.css';

const Filters = (props) => {
    const { dateSort, likesSort, responsesSort } = props;




    return(
        <div className={styles.mainDiv}>
            <SearchInput placeholder="Szukaj..."/>
            <Button name="WG DATY" icon="↑" buttonClickFunction={dateSort}/>
            <Button name="WG LIKOW" icon="↑" buttonClickFunction={likesSort}/>
            <Button name="ILOS ODP" icon="↑" buttonClickFunction={responsesSort}/>
        </div>
    )
}

export default Filters;