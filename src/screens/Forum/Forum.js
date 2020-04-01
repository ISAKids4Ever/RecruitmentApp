import React, { useState } from 'react'
import  {useAuth}  from "hooks";
import { ItemsList, CreateItem } from "components";
import styles from './Forum.module.css'

export function Forum() {
  const [clicked, setClicked] = useState(false)
   const isLoggedIn = useAuth();



  return (
    <div className={styles.mainDiv}>
      <div className={styles.content}>
        <h1>FORUM</h1>
        {true || <h1>SIGN IN TO ADD A QUESTION</h1>}
        { true && (clicked || 
          <h1>Do you wanna create a topic/ask question?
            <a
              // TODO: Remove inline styles
              style={{ cursor: "pointer", color: "black" }}
              // TODO: Change a tag to button
              onClick={(e) => {
                e.preventDefault()
                setClicked(!clicked)
              }}
            >
              CLICK HERE
            </a>
          </h1>)}
        <CreateItem  clicked={clicked} />
        <ItemsList />
      </div>
    </div>
  )
}