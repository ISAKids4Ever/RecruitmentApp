import React from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom"
import { register } from "../services/userService";


function View2() {
  return (
   <div className={styles.mainDiv2}>
     <Link to="/zaloguj">zaloguj się</Link>
      <h1>Register</h1>
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