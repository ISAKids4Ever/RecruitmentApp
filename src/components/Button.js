import React from 'react'
import './Button.modules.css'


function Button(props){
    const {
      onClick,
      className = 'regularButton',
      children
    } = props;
    return (
      <button onClick={onClick} className={className} type='button'>
        {children}
      </button>
    )
}

export default Button