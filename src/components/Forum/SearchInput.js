import React from 'react';
import styles from './SearchInput.module.css'

const SearchInput = (props) => {
    const { placeholder, inputValue, handleChange } = props
    return(
        <React.Fragment>      
            <input 
            type="text"
            placeholder={placeholder} 
            value={inputValue}
            onChange={handleChange}
/>        </React.Fragment>
    )
}

export default SearchInput;