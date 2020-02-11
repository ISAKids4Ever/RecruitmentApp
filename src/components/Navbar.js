import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import firebase from "../firebase";

function Navbar(props) {
  const { profile, logout, login } = props;
  console.log(profile)
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>LEWA</div>
      <div className={styles.navbarRight}>
        <ul className={styles.viewList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/testy">Testy</Link>
          </li>
          <li>
            <Link to="/pytania">Pytania rekrutacyjne</Link>
          </li>
          <li>
            <Link to="/forum">Forum</Link>
          </li>
          {login && <li>
            <Link to="/zaloguj">Zaloguj się</Link>
          </li>}
          {profile && <li>
            <Link to="/view4">WIDOK 4</Link>
          </li>}
          {logout && <li>
            <button onClick={() => firebase.auth().signOut()}>Log out</button>
          </li>}
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
