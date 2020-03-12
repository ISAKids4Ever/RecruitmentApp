import React from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom"
import { register } from "services";


export function Register() {
  return (
   <div className={styles.mainDiv2}>
     <Link to="/zaloguj">zaloguj się</Link>
      <h1>Register</h1>
      <button onClick={() => register("email5@email.com", "password", "name", "bio", "joined")
      }>Zarejestruj</button>
   </div>
  );
}