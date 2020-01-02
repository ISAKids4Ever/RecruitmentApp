import React, { useEffect } from 'react';
import styles from './View2.module.css'
import { register } from '../services/userService';


function View2() {
  return (
   <div className={styles.mainDiv2}>
      <h1>WIDOK 2</h1>
      <button onClick={() => {
        register("email2@email.com", "password", "name", "bio", "joined").then(() => {
          console.log("registered in")
        }).catch((err) => {
          console.log(err)
        })
      }}>Zarejestruj</button>
   </div>
  );
}

export default View2;