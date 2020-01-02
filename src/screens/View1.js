import React from 'react';
import styles from './View1.module.css'
import { login } from '../services/userService';


function View1() {
  return (
   <div className={styles.mainDiv1}>
       <h1>WIDOK 1</h1>
       <button onClick={() => {
        login("email2@email.com", "password").then(() => {
          console.log("logged in")
        }).catch((err) => {
          console.log(err)
        })
      }}>LogIn</button>
   </div>
  );
}

export default View1;