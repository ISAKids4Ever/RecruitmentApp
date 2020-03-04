import React from 'react'
import './Button.modules.css'


export function Button(props){
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