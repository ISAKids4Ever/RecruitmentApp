import React from "react";
import { Link } from "react-router-dom"
import styles from "./Login.module.css";
import { login } from "../services/userService";


function View1() {
  return (
   <div className={styles.mainDiv1}>
      <Link to="/zarejestruj">Zarejestruj się</Link>
      <h1>Login</h1>
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