import React from "react";
import { Link } from "react-router-dom"
import styles from "./Login.module.css";
import { login } from "services";


export function Login() {
  return (
   <div className={styles.mainDiv1}>
      <Link to="/zarejestruj">Zarejestruj się</Link>
      <h1>Login</h1>
      <button onClick={() => {
        console.log("login is disabled here")
        // login("email2@email.com", "password").then(() => {
        // }).catch((err) => {
          
        // })
      }}>LogIn</button>
   </div>
  );
}