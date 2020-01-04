import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import firebase from "../firebase";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>LEWA</div>
      <div className={styles.navbarRight}>
        <ul className={styles.viewList}>
          <li>
            <Link to="/view3">WIDOK 3</Link>
          </li>
          <li>
            <Link to="/view4">WIDOK 4</Link>
          </li>
          <li>
            <button onClick={() => firebase.auth().signOut()}>Log out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
