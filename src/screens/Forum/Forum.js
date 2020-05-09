import React, { useState } from 'react'
import { useUser } from "hooks";
import { ItemsList, CreateItem } from "components";
import styles from './Forum.module.css'

export function Forum() {
  const [clicked, setClicked] = useState(false)
  const user = useUser();

  return (
    <div className={styles.mainDiv}>
      <div className={styles.content}>
        <h1>FORUM</h1>
        {!user ? (
          <h1>SIGN IN TO ADD A QUESTION</h1>
        ) : (
            (clicked ||
              <h1>Do you wanna create a topic/ask question?
                <a
                  // TODO: Remove inline styles
                  // TODO: Change a tag to button
                  style={{ cursor: "pointer", color: "black" }}
                  onClick={(e) => {
                    e.preventDefault()
                    setClicked(!clicked)
                  }}
                >
                  CLICK HERE
                </a>
              </h1>
            )
          )}
        <CreateItem clicked={clicked} />
        <ItemsList />
      </div>
    </div>
  )
}