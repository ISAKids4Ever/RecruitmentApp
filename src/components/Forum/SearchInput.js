import React from 'react';
import styles from './SearchInput.module.css'

const SearchInput = (props) => {
    const { placeholder, handleChange, inputValue } = props
    return(
        <div>      
            <input 
            type="text"
            placeholder={placeholder} 
            value={inputValue}
            onChange={handleChange} />
        </div>
    )
}

export default SearchInput;